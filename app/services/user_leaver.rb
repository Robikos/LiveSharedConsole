class UserLeaver
  def initialize(room_id, current_user)
    @room_id = room_id
    @current_user = current_user
  end

  def call
    send_goodbye_message
    unassign_user_from_room
  end

  private

  def send_goodbye_message
    ActionCable.server.broadcast(
      room_stream_name,
      {
        message: "#{current_user.email} left this room"
      }
    )
  end

  def unassign_user_from_room
    current_user.update!(room: nil)
  end

  def room_stream_name
    "console_stream_#{room_id}"
  end

  attr_reader :room_id, :current_user
end
