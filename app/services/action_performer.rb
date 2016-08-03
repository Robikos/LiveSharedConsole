class ActionPerformer
  def initialize(room_id, data)
    @room_id = room_id
    @data = data["code"]
  end

  def call
    `echo "#{data}" > public/actual_code.rb`
    `ruby public/actual_code.rb`
  end

  private

  attr_reader :room_id, :data
end
