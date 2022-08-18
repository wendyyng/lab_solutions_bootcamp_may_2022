class User < ApplicationRecord
  has_many :products, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  scope(:search, ->(search_term) { where("first_name ILIKE ? OR last_name ILIKE ? OR email ILIKE ?", "%#{search_term}%", "%#{search_term}%", "%#{search_term}%") })
  has_many :votes, dependent: :destroy
  has_many :voted_reviews, through: :votes, source: :review
  has_many :likes, dependent: :destroy
  has_many :liked_reviews, through: :likes, source: :review

  has_many :favourites
  has_many :favourited_products, through: :favourites, source: :product

  def full_name
    "#{first_name} #{last_name}".strip.titleize
  end

  def from_oauth?
    uid.present? && provider.present?
  end

  def self.create_from_oauth(oauth_data)
    name = oauth_data["info"]["name"]&.split || oauth_data["info"]["nickname"]
    self.create(
      first_name: name[0],
      last_name: name[1],
      uid: oauth_data["uid"],
      provider: oauth_data["provider"],
      oauth_raw_data: oauth_data,
      password: SecureRandom.hex(32),
    )
  end

  def self.find_by_oauth(oauth_data)
    self.find_by(
      uid: oauth_data["uid"],
      provider: oauth_data["provider"],
    )
  end
end
