class Post < ApplicationRecord
	validates :description, :workout_id, :address, :image_url, :user_id, presence: true
end
