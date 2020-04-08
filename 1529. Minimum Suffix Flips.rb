#* 1529. Minimum Suffix Flips
target = "10111"
#* SOL 1
def min_flips(target)
    current_state = "0"
    count = 0
    
    target.each_char do |char|
      if char != current_state
        current_state = current_state == "1" ? "0" : "1"
        count += 1
      end
    end
  
    count
end
p min_flips(target)

  
#* WORKING . . .
#*
def min_flips(target)
    n = target.size
    dp = Array.new(n, 0)

    for i in 1...n
        if target[i] == '0'
            dp[i] = dp[i - 1] ^ 1
            next
            
        end
        
        if target[i - 1] == '1'
            dp[i] = dp[i - 1]
            next
            
        end
        
        dp[i] = [dp[i - 1], dp[i - 2]].min ^ 1
        
    end

end
p min_flips(target)

# 1529. Minimum Suffix Flips
target = "10111"

def min_flips(target)
  n = target.size
  dp = Array.new(n, 0)

  dp[0] = target[0] == '1' ? 1 : 0

  for i in 1...n
    if target[i] == '0'
      dp[i] = dp[i - 1] ^ 1
    elsif target[i - 1] == '1'
      dp[i] = dp[i - 1]
    else
      dp[i] = [dp[i - 1], dp[i - 2]].min ^ 1
    end
  end

  dp.last
end

p min_flips(target)
