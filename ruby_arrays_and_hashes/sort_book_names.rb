# [Lab] Sort Book Names
# Write some code that keeps asking the user for book names until the user enters "exit". After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.

puts "Enter your fav books"

book_name = []
while name = gets.chomp
    if name =='exit'
        break
    else
        book_name << name.capitalize
    end
end
p book_name.sort
