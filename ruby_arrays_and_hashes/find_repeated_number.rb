# [Lab] Find The Repeated Number
# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?

# Solve it in two ways: one using hashes and one without.

arr = Array(1..1_000_000)

arr[30] = 13

# Solution using arrays
arr.sort!

arr.each.with_index do |num, i|
    if num == arr[i + 1]
        p "Found the repeated number"
        puts num 
        break 
    end
end

# Solution using hashes
arr2 = Array(1..1_000_000)

arr2[10] = 5

hash = {}

arr2.each do |num|
    if !hash[num]
        hash[num] = num
    else 
        p "Found the repeated number"
        puts num 
        break 
    end
end