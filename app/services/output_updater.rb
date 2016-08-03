class OutputUpdater
  def initialize(room_id:, user:, code:, result:)
    @room_id = room_id
    @user = user
    @code = code
    @result = result
  end

  def call
    ActionCable.server.broadcast(
      room_stream_name,
      {
        user: user.email,
        code: code,
        content: result
      }
    )
  end

  private

  def room_stream_name
    "console_stream_#{room_id}"
  end

  attr_reader :room_id, :user, :code, :result
end
