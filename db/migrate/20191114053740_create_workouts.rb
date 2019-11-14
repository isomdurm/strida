class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :route_id
      t.float :coordinates
      t.boolean :private
      t.float :time_start
      t.float :time_end
      t.string :songs

      t.timestamps
    end
  end
end
