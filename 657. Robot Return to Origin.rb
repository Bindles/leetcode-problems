#* 657. Robot Return to Origin
moves = "UD"
# @param {String} moves
# @return {Boolean}
def judge_circle(moves)
  moves.count('U') == moves.count('D') && moves.count('L') == moves.count('R')
end
p judge_circle(moves)