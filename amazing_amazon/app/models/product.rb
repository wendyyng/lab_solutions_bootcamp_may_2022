class Product < ApplicationRecord
  validates(:title,
            presence: true,
            :uniqueness => { :case_sensitive => false })
  validates :price, numericality: { greater_than: 0 }
  validates :description, presence: true, length: { minimum: 10 }
  before_validation :set_default_price, :capitalize_title
  DEFAULT_PRICE = 1
  scope :search, ->(query) { where("title ILIKE ? OR  description ILIKE ?", "%#{query}%", "%#{query}%") }
  validates_exclusion_of :title, in: %w( apple microsoft sony ), message: "please use a different title"
  belongs_to :user
  has_many :reviews, -> { order("updated_at DESC") }, dependent: :destroy

  private

  def capitalize_title
    self.title.capitalize!
  end

  def set_default_price
    self.price ||= DEFAULT_PRICE
  end
end
