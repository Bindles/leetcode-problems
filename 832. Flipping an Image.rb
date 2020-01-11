#* 832. Flipping an Image
image = [[1,1,0],[1,0,1],[0,0,0]]
# @param {Integer[][]} image
# @return {Integer[][]}
#*
def flip_and_invert_image(image)
    image.map(&:reverse).map { |row| row.map { |num| 1 - num } }
end
p flip_and_invert_image(image)
#*
def flip_and_invert_image(image)
    image.map(&:reverse).map do |ea|
        ea.join.gsub('0', '2').gsub('1', '0').gsub('2', '1').chars.map(&:to_i)
    end
end
p flip_and_invert_image(image)

#*
def flip_and_invert_image(image)
  image.map(&:reverse).map do |ea|
  ea.map { |el| el == 0 ? 1 : 0 }
  end
end
  
p flip_and_invert_image(image)
