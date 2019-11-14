class Route < ApplicationRecord

	validates :name, :description, :route_type, :owner_id, :private, presence: true

end
