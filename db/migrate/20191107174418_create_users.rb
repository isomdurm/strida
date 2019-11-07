class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.date :date_of_birth, null: false
      t.string :username, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :encrypted_password, null: false
      t.string :session_token, null: false
      t.string :gender, null: false
      t.string :height, null: false
      t.string :weight, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
