# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Product.destroy_all()
PASSWORD = "123"
super_user = User.create(
  first_name: "jon",
  last_name: "snow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  admin: true,
)
10.times do
  u = User.create({
    first_name: Faker::Games::SuperSmashBros.fighter,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  })
end
users = User.all
10.times do
  Tag.create(name: Faker::Science.scientist)
end

tags = Tag.all
40.times do
  p = Product.new({
    title: Faker::Commerce.product_name,
    description: Faker::Hipster.sentence,
    price: Faker::Commerce.price,

  })
  p.user = users.sample
  p.tags = tags.shuffle.slice(0, rand(1..tags.count))

  p.save
  if p.valid?
    rand(1..5).times do
      r = Review.new(rating: 3, body: Faker::Company.name)
      r.product = p
      r.user = users.sample
      r.save
    end
  end
end
products = Product.all
reviews = Review.all
p "created #{products.count} products, #{reviews.count} reviews, #{tags.count} tags, #{users.count} users"
