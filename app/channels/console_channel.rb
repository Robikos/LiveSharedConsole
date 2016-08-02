class ConsoleChannel < ApplicationCable::Channel
  def subscribed
    return if room_id.blank?
    RoomCreator.new(room_id, current_user).call
    UserJoiner.new(room_id, current_user).call
    stream_from "console_stream_#{room_id}"
  end

  def unsubscribed
    return if room_id.blank?
    UserLeaver.new(room_id, current_user).call
    RoomDestroyer.new(room_id, current_user).call
  end

  def receive(data)
    return if room_id.blank?
    result = ActionPerformer.new(room_id, data).call
    OutputUpdater.new(room_id, result).call
  end

  private

  def room_id
    params[:id]
  end
end
