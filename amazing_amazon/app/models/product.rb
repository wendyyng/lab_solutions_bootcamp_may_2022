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

  has_many :favourites, dependent: :destroy
  has_many :favouriters, through: :favourites, source: :user
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  def tag_names
    self.tags.map(&:name).join(", ")
  end

  def tag_names=(rhs)
    self.tags = rhs.strip.split(/\s*,\s*/).map do |tag_name|
      Tag.find_or_initialize_by(name: tag_name)
    end
  end

  private

  def capitalize_title
    self.title.capitalize!
  end

  def set_default_price
    self.price ||= DEFAULT_PRICE
  end
end
