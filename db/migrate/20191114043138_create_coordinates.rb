class CreateCoordinates < ActiveRecord::Migration[5.2]
  def change
    create_table :coordinates do |t|
      t.integer :route_id
      t.float :lat
      t.float :long

      t.timestamps
    end
    add_index :coordinates, :route_id
  end
end
