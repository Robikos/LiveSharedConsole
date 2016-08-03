class ActionPerformer
  def initialize(room_id, data)
    @room_id = room_id
    @data = data["code"]
  end

  def call
    `echo #{data} > #{input_fifo_filename}`
    `cat #{output_fifo_filename}`
  end

  private

  def input_fifo_filename
    Rails.root.join("tmp/input/#{room_id}")
  end

  def output_fifo_filename
    Rails.root.join("tmp/output/#{room_id}.log")
  end

  attr_reader :room_id, :data
end
