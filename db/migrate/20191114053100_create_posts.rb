class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :image_url
      t.string :address
      t.text :description
      t.integer :route_id

      t.timestamps
    end

    add_index :posts, :user_id
    add_index :posts, :route_id
  end
end
