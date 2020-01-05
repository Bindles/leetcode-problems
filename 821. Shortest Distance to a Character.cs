// 821. Shortest Distance to a Character
//s = "loveleetcode"; c = "e"
public class Solution {
    public int[] ShortestToChar(string s, char c) {
        List<int> ans = new();
        for (int i = 0; i < s.Length; i++)
        {
            int distance = int.MaxValue;
            for (int j = 0; j < s.Length; j++)
                if (s[j] == c && distance > Math.Abs(j - i))
                    distance = Math.Abs(j - i);
            ans.Add(distance);
        }
        return ans.ToArray();
    }
}