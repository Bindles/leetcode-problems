#* 1237. Find Positive Integer Solution for a Given Equation
function_id = 1; z = 5

#	You should not implement it, or speculate about its implementation
#	class CustomFunction:
#		def f(self, x, y):
# 			Returns f(x, y) for any given positive integers x and y.
# 			Note that f(x, y) is increasing with respect to both x and y.
# 			i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
# 		end
# 	end
# 

# @param {CustomFunction} customfunction
# @param {Integer} z
# @return {List[List[Integer]]}
def findSolution(customfunction, z)
    result = []
    (1..1000).each do |x|
        (1..1000).each do |y|
            if customfunction.f(x, y) == z
                result << [x, y]
            elsif customfunction.f(x, y) > z
                break
            end
        end
    end
    result
end
