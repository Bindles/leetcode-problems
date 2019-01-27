// 1963. Minimum Number of Swaps to Make the String Balanced
s = "][]["
/**
 * @param {string} s
 * @return {number}
 */
//SOL 1 | CORRECTED BY Math.floor()
var minSwaps = function(s) {
    var open_bracket_count = 0
    Array.from(s).forEach(char => {
        if (char == '[') {
            open_bracket_count += 1
        } else if(open_bracket_count>0){
          open_bracket_count-=1
        }
    })
    return Math.floor((open_bracket_count+ 1 ) / 2)
};
console.log(minSwaps(s))

