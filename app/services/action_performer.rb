class ActionPerformer
  def initialize(room_id, data)
    @room_id = room_id
    @data = data
  end

  def call
  end

  private

  attr_reader :room_id, :data
end
