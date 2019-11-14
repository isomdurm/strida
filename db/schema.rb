# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_14_053740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coordinates", force: :cascade do |t|
    t.integer "route_id"
    t.float "lat"
    t.float "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["route_id"], name: "index_coordinates_on_route_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "post_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "user_id"], name: "index_likes_on_post_id_and_user_id", unique: true
    t.index ["post_id"], name: "index_likes_on_post_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id"
    t.string "image_url"
    t.string "address"
    t.text "description"
    t.integer "route_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["route_id"], name: "index_posts_on_route_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.string "route_type", null: false
    t.integer "owner_id", null: false
    t.boolean "private"
    t.text "description"
    t.float "coordinates", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.date "date_of_birth"
    t.string "username", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "encrypted_password", null: false
    t.string "session_token", null: false
    t.string "gender"
    t.string "height"
    t.string "weight"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "route_id"
    t.float "coordinates"
    t.boolean "private"
    t.float "time_start"
    t.float "time_end"
    t.string "songs"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
