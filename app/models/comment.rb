class Comment < ApplicationRecord
	validates :user_id, :post_id, :body, presence: true
end
