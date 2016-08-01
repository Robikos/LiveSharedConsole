class AddPidToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :pid, :integer, null: true
  end
end
