class UserJoiner
  def initialize(room_id, current_user)
    @room_id = room_id
    @current_user = current_user
  end

  def call
    send_welcome_message
    assign_user_to_room
  end

  private

  def send_welcome_message
    ActionCable.server.broadcast(
      room_stream_name,
      {
        user: current_user.email,
        content: "#{current_user.email} joined this room"
      }
    )
  end

  def assign_user_to_room
    return if current_user.room == room

    current_user.update!(room: room)
  end

  def room_stream_name
    "console_stream_#{room_id}"
  end

  def room
    @room ||= Room.find(room_id)
  end

  attr_reader :room_id, :current_user
end
