// 1963. Minimum Number of Swaps to Make the String Balanced
s = "][]["
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    var open_bracket_count = 0
    Array.from(s).forEach(char => {
        if (char == '[') {
            open_bracket_count += 1
        } else if(open_bracket_count>0){
          open_bracket_count-=1
        }
    })
    return (open_bracket_count+1) / 2
};
console.log(minSwaps(s))

