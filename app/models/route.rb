class Route < ApplicationRecord
	validates :name, :description, :route_type, :owner_id, :private, presence: true

	has_many :coordinates
end
