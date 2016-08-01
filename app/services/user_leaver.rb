class UserLeaver
  def initialize(room_id, current_user)
    @room_id = room_id
    @current_user = current_user
  end

  def call
  end

  private

  attr_reader :room_id, :current_user
end
