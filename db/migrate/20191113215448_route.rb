class Route < ActiveRecord::Migration[5.2]
  def change
  	create_table :routes do |t|
      t.string :name, null: false
      t.string :route_type, null: false
      t.integer :owner_id, null: false
      t.boolean :private
   	  t.text :description
   	  t.float :coordinates, :array => true, default: []

      t.timestamps
    end
  end
end
