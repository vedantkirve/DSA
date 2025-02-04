s = "abc"
ans = []

#helper function to swap
def swap(s,a_index,b_index):
    temp = a
    s[a_index] = s[b_index]
    s[b_index] = temp


ln = len(s) -1
mp = {} #to check if duplicate path present
def solve(s,start_index,ans):
    # base condition
    if start_index  == ln:
        ans.append(s)
        return 
    
    for i in range(start_index,ln-1):
        if(s[i] not in mp){
            mp[s[i]] = True
            swap(s,start_index,i)
            solve(s,start_index+1,ans)
            swap(s,start_index,i) # bring it back to original position in s for original function
        }

solve(s,0,ans)

print("ans-->>",ans)


    
