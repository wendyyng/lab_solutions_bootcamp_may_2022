class User < ApplicationRecord
  has_many :products
  has_many :reviews
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  scope(:search, ->(search_term) { where("first_name ILIKE ? OR last_name ILIKE ? OR email ILIKE ?", "%#{search_term}%", "%#{search_term}%", "%#{search_term}%") })

  def full_name
    "#{first_name} #{last_name}".strip.titleize
  end
end
