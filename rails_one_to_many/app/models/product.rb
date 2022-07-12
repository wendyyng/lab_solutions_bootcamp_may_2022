class Product < ApplicationRecord
    after_initialize :set_default_price
    before_save :capitalize_title
    scope :search, ->(search_query) { where("title ILIKE '%#{search_query}%' or description ILIKE '%#{search_query}%' ") }
    
    has_many :reviews, dependent: :destroy

    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :price, numericality:{greater_than: 0}
    validates :description, presence: true, length: { minimum: 10 }

    private
    def set_default_price
        self.price ||= 1
    end

    def capitalize_title
        self.title.capitalize!
    end
end
