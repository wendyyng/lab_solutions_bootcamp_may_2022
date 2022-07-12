class User < ApplicationRecord
  scope(:search, ->(search_term) { where("first_name ILIKE ? OR last_name ILIKE ? OR email ILIKE ?", "%#{search_term}%", "%#{search_term}%", "%#{search_term}%") })
end
