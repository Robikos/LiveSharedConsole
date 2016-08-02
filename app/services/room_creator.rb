class RoomCreator
  def initialize(room_id, current_user)
    @room_id = room_id
    @current_user = current_user
  end

  def call
    return if room.pid.present?

    create_fifos
    new_pid = IO.popen("irb < #{input_fifo_filename} > #{output_fifo_filename}").pid
    save_pid(new_pid)
  end

  private

  def room
    @room ||= Room.find(room_id)
  end

  def create_fifos
    `mkfifo #{input_fifo_filename}`
    `touch #{output_fifo_filename}`
  end

  def output_fifo_filename
    Rails.root.join("tmp/output/#{room_id}.log")
  end

  def input_fifo_filename
    Rails.root.join("tmp/input/#{room_id}")
  end

  def save_pid(new_pid)
    room.update!(pid: new_pid)
  end

  def process_exists?(pid)
    `ps aux | grep #{pid}`.length > 0
  end

  attr_reader :room_id, :current_user
end
