#* 2186. Minimum Number of Steps to Make Two Strings Anagram II
s = "leetcode"; t = "coats"
# @param {String} s
# @param {String} t
# @return {Integer}
from collections import Counter
#* SOLVED GOOD PROBLEM LEARNED SOME
def min_steps(s: str, t: str) -> int:
    s_count = Counter(s)
    t_count = Counter(t)
    steps = 0

    unique_chars = set(s_count.keys()).union(set(t_count.keys()))

    for char in unique_chars:
        steps += abs(s_count[char] - t_count[char])

    return steps

# Test cases
s1 = "leetcode"
t1 = "coats"
print(min_steps(s1, t1))  # Output: 7

s2 = "night"
t2 = "thing"
print(min_steps(s2, t2))  # Output: 0




