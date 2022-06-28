# Given an array of words, generate an array of numbers 
# that contains the lengths of each word in the first 
# array in the same order.

words = ["Hi", "How", "are", "you", "doing", "today"]

word_counts = []
for word in words 
    word_counts << word.length
end

p word_counts