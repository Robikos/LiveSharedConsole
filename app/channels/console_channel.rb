class ConsoleChannel < ApplicationCable::Channel
  def subscribed
    stream_from "console_stream"
  end

  def unsubscribed
  end

  def received(data)
  end
end
