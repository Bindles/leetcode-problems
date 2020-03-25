#PYTHON
#* 2710. Remove Trailing Zeros From a String
num = "51230100"
# @param {String} num
# @return {String}
#* LOL GENIUS | WONDER IF IT WORKS IN PY
def remove_trailing_zeros(num):
    return str(int(str(num)[::-1]))[::-1]

print(remove_trailing_zeros(num))
