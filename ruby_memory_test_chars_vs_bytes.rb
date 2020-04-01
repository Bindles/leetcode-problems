require 'objspace'

s = "aaaaslkdkldklajdlkasn ndandkjasdnadsdlskdlakdlaskbcs"

chars_array = s.chars
bytes_array = s.bytes

puts "Memory size of chars_array: #{ObjectSpace.memsize_of(chars_array)}"
puts "Memory size of bytes_array: #{ObjectSpace.memsize_of(bytes_array)}"

chars_array.each do |char|
  puts "Memory size of char '#{char}': #{ObjectSpace.memsize_of(char)}"
end

bytes_array.each do |byte|
  puts "Memory size of byte #{byte}: #{ObjectSpace.memsize_of(byte)}"
end
