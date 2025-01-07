arr = [1,6,11,5]
#expected ans to be [1, 11] - [5, 6] = 1
#s1 - s2 = minimun as max is range =>  FINAL ANS CAN BE  ( range - 2s1 )
#can be empty or max which is summ of all 
min_rg = 0
max_rg = 0
for i in arr:
    max_rg+=i
print("max_rg-->>",max_rg)

def two_d_array(Wt):
    t = []
    for i in range(0,n+1):
        child = [False]*(Wt+1)
        t.append(child)
    return t
    

n = len(arr)
allowed_values = []
dc = {}
check_value = max_rg//2
print("check_value-->>",check_value)

for k in range(0,check_value+1):
    Wt = k

    # check for sum subset exists
    t = two_d_array(Wt)
    for i in range(0, n +1):
        for j in range(0,  Wt + 1):
            if j == 0:  # Subset sum of 0 is always possible (by taking an empty set)
                t[i][j] = True
            elif i == 0:  # If no items are available, no subset can form a positive sum
                t[i][j] = False
            else:
                if arr[i-1] <= j:  # Include or exclude the current item
                    t[i][j] = t[i-1][j-arr[i-1]] or t[i-1][j]
                else:  # Exclude the current item
                    t[i][j] = t[i-1][j]

    print("t[n][Wt]",t[n][Wt],"Wt",Wt)
    if(t[n][Wt]):
        allowed_values.append(Wt)   

print("allowed_values",allowed_values)

final_ans = 100000 #max value
for i in allowed_values:
    val = max_rg - (2*i)
    if(val <= final_ans):
        final_ans = val

print("final_ans-->>",final_ans)







    

    


