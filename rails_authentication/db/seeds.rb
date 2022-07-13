Review.destroy_all
Product.destroy_all
User.destroy_all
Tag.destroy_all

PASSWORD = "123"
super_user = User.create(
    first_name: "Admin",
    last_name: "User",
    email: "admin@user.com",
    password: PASSWORD,
    is_admin: true
)

5.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name}@#{last_name}.com",
        password: PASSWORD
    )
end

users = User.all

15.times do
    Tag.create(
      name: Faker::ProgrammingLanguage.name
    )
  end

tags = Tag.all

50.times do 
    created_at = Faker::Date.backward(days: 365 * 2)
    p = Product.create(
        title: Faker::Company.name,
        description: Faker::Company.industry,
        price: rand(1000),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if p.valid?
        rand(1..5).times do 
            Review.create(rating:3, body:Faker::Company.name, product:p, user: users.sample)
        end
        p.tags = tags.shuffle.slice(0, rand(tags.count / 2))
    end

end

reviews = Review.all
products = Product.all
puts reviews.count
puts products.count
puts users.count
puts tags.count