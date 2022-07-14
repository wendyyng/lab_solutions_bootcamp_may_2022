class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    alias_action(:create, :read, :update, :destroy, to: :crud)

    can(:crud, Product) do |product|
      user == product.user
    end

    can(:crud, Review) do |review|
      user == review.user
    end
  end
end
