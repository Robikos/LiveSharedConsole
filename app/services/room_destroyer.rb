class RoomDestroyer
  def initialize(room_id, current_user)
    @room_id = room_id
    @current_user = current_user
  end

  def call
    return if room.users.exists?

    destroy_console
    unlink_fifos
    clear_pid
  end

  private

  def room
    @room ||= Room.find(room_id)
  end

  def destroy_console
    `kill #{room.pid}`
  end

  def unlink_fifos
    `unlink #{output_fifo_filename}`
  end

  def clear_pid
    room.update!(pid: nil)
  end

  def output_fifo_filename
    Rails.root.join("tmp/output/#{room_id}")
  end

  attr_reader :room_id, :current_user
end
