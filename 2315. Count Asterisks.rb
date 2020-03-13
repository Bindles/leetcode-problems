#* 2315. Count Asterisks
# s = "iamprogrammer"
s = "yo|uar|e**|b|e***au|tifu|l"
# @param {String} s
# @return {Integer}
#* SOL 1.1
def count_asterisks(s)
    res=0
    s.split('|').each_with_index do |subs, i|
        res += subs.count('*') if i.even?
    end
    res  
end

#*
def count_asterisks(s)
    res=[]
    s.split('|').each_with_index do |subs, i|
        p "#{subs} #{i.even?} #{subs.count('*')}"
        res << subs.count('*') if i.even?
    end
    res.sum   
end
p count_asterisks(s)

#*WORKING . . .
#*DONT WORK
#*
def count_asterisks(s)
    s.split('|').each_with_index.count do |sub, i|
        sub.count('*') if i.even?
    end    
end
p count_asterisks(s)

#*
def count_asterisks(s)
    s.count('|') == 0 ? 0 : s.split('|').each_with_index.count{ |sub, i|sub.count('*') if i.even? }    
end
p count_asterisks(s)