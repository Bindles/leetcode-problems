#* 832. Flipping an Image
image = [[1,1,0],[1,0,1],[0,0,0]]
#*
def flip_and_invert_image(image):
  reversed_image =[row[::-1] for row in image]
  print(reversed_image)
  result = [[1 if el == 0 else 0 for el in row] for row in reversed_image]
    
  return result

print(flip_and_invert_image(image))



#WORKING . . .
def flip_and_invert_image(image):
  for elem in image:
    a = [num * 10 for num in elem]
    print(a)

print(flip_and_invert_image(image))
