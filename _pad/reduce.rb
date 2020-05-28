comb = [1, 2, 3]
result1 = comb.reduce(:+)
puts result1  # Output: 6 (because 1 + 2 + 3 == 6)

result2 = comb.reduce(0, &:+)
puts result2  # Output: 6 (because 0 + 1 + 2 + 3 == 6)

result2 = comb.reduce(1, &:+)
puts result2  # Output: 6 (because 0 + 1 + 2 + 3 == 6)


# Ruby program for collect_concat method in Enumerable 
  
# Initialize 
enu = [12, 18] 
  
# returns enumerator 
p res = enu.collect_concat { |el| [2*el, 3*el, 10] }

array =
[
  [
    "Francis",
    "Chartrand",
    "email@email.com"
  ],
  [
    "Francis",
    "Chartrand",
    "second_email@email.com"
  ],
 ]

 p array.map{|a| a[2]}.join(", ")
 p array.reduce(nil) {|str, arr| str ? (str << ', ' << arr[2]) : arr[2].dup}

 s = ''          
array.flatten.each_slice(3) {|e| s += e.last + ', '} 
p s.chop.chop

p array.transpose[2].join(', ')

p array.transpose

#* my addition:
p array.reduce([]) {|arr, elem| arr << elem.last}

