class OutputUpdater
  def initialize(room_id, result)
    @room_id = room_id
    @result = result
  end

  def call
    ActionCable.server.broadcast(
      room_stream_name,
      {
        message: "#{result}"
      }
    )
  end

  private

  def room_stream_name
    "console_stream_#{room_id}"
  end

  attr_reader :result, :room_id
end
