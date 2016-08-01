class ConsoleChannel < ApplicationCable::Channel
  def subscribed
    RoomCreator.new(room_id, current_user).call
    stream_from "console_stream_#{room_id}"
    UserJoiner.new(room_id, current_user).call
  end

  def unsubscribed
    UserLeaver.new(room_id, current_user).call
    RoomDestroyer.new(room_id, current_user).call
  end

  def received(data)
    result = ActionPerformer.new(room_id, data).call
    OutputUpdater.new(result).call
  end

  private

  def room_id
    params[:id]
  end
end
