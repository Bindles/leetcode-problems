// 657. Robot Return to Origin
//moves = "UD"

//SOL 1
using System;

public class Solution {
    public bool JudgeCircle(string moves) {
        return moves.Count(c => c == 'U') == moves.Count(c => c == 'D') &&
               moves.Count(c => c == 'L') == moves.Count(c => c == 'R');
    }
}

class Program {
    static void Main(string[] args) {
        string moves = "UD";
        Solution solution = new Solution();
        Console.WriteLine(solution.JudgeCircle(moves)); // Output: True
    }
}
