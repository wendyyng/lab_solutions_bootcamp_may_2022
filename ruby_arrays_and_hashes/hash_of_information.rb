# [Lab] Hash of Information
# Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a hash. After that loop through the hash and display the results, for example:

# Your first name is Tam.
# Your last name is K.
# Your city of birth is Burnaby.
# Your age is 25.
# Capitalize the inputs from the user if they are capitalizable.

result={}

puts "Enter a first name"
result["first name"] = gets.chomp.capitalize

puts "Enter a last name"
result["last name"] = gets.chomp.capitalize

puts "Enter a city name"
result["city name"] = gets.chomp.capitalize

puts "Enter a age"
result["age"] = gets.chomp

p result



result.each do |key, value|
    p "Your #{key} is #{value}"
end  

# solution 2
p "Enter your first name"
first_name = gets.chomp
p "Enter your last name"
last_name = gets.chomp
p " Enter your city of birth"
bith_city = gets.chomp
p "Enter your age"
age=gets.chomp

information = {
    "first name"=> first_name.capitalize,
    "last name"=> last_name.capitalize,
    "birth city"=> bith_city.capitalize,
    "age"=> age
}

information.each do |key, val|
    p "Your #{key} is #{val}"
end