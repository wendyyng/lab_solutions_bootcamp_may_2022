require_relative "./animal.rb"

class Cat < Animal
  def eat
    puts "Fish is yummy!"
  end
end

c = Cat.new("Garfield", "orange")
c.eat
p c.color
p c.name
