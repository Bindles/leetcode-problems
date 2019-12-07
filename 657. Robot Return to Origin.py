#* 657. Robot Return to Origin
moves = "UD"
def judge_circle(moves):
    return moves.count('U') == moves.count('D') and moves.count('L') == moves.count('R')

# Example usage
moves = "UDLR"
print(judge_circle(moves))  # Output: True
