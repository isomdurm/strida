class Workout < ApplicationRecord
	validates :route_id, :user_id, :time_start, :time_end, presence: true

	has_many :coordinates
end
