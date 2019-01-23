// 1963. Minimum Number of Swaps to Make the String Balanced
//s = "][]["
class Solution {
    public int minSwaps(String s) {
    int min=0;
    for(int i=0;i<s.length();i++){
        if(s.charAt(i)=='[') min++;
        else if(min>0)min--;
    }return (min+1)/2;
    }
}