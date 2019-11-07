class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.date :date_of_birth
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :encrypted_password
      t.string :session_token
      t.string :gender
      t.string :height
      t.string :weight
      t.string :street
      t.string :city
      t.string :state
      t.string :zipcode

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
