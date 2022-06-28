# [Lab] Square Array of Arrays
# Given an array of arrays:

# array = [[2,3,4], [5,6,7], [6,7,8]]



# Write a piece of code that will take that array and give back an array of arrays with each element multiplied by itself so you will get back:

# [[4, 9, 16], [25, 36, 49], [36, 49, 64]]

twoDArray = [[2,3,4], [5,6,7], [6,7,8]]

squared_array = []

twoDArray.each do |arr|
    temp = []
    arr.each do |num|
        temp << num * num 
    end
    squared_array << temp 
end

p squared_array

# solutin 2 with map
array =[[2,3,4], [5,6,7], [6,7,8]]
result = array.map do |inner_array|
    inner_array.map do |element|
         element **2
    end
end
p result