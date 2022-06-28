# [Lab] Letter combos
# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:

# 1 | ["ab", "bc", "cd"]

# Given a string 123456: 1| ["12", "23", "34", "45", "56"]

# str = gets.chomp




puts "enter a string here:"

str = gets.chomp # "123456"
arr = str.split ""; # arr = ['1', '2', '3', '4', '5', '6']

result = []

for i in 0..arr.length-2 # 0..4
    result << arr[i] + arr[i+1]
end

p result

# iteration   |  arr[iteration] + arr[iteration + 1]    | result []
# ------------------------------------------------------------------
# 0           | '1'             + '2'                   | ["12"]
# 1           | '2'             + '3'                   | ["12", "23"]
# 2           | '3'             + '4'                   | ["12", "23", "34"]
# 3           | '4'             + '5'                   | ["12", "23", "34", "45"]
# 4           | '5'             + '6'                   | ["12", "23", "34", "45", "56"]
