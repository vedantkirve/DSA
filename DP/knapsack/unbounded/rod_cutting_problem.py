lg = 8
length_arr = [1,2,3,4,5,6,7,8]
profit = [1,5,8,9,10,17,17,20]

# maximixe the profit


n = len(length_arr)
val = profit
wt = length_arr
Wt = lg

t = []
for i in range(0,n+1):
    child= [0]*(Wt+1)
    t.append(child)

for i in range(0,n+1):
    for j in range(0,Wt+1):
        if j == 0 or i == 0:
            t[i][j] = 0
        else:
            if wt[i-1] <= j:
                t[i][j] = max(val[i-1] + t[i][j-wt[i-1]], t[i-1][j])
            else:
                t[i][j] = t[i-1][j]

print("ans-->>",t[n][Wt])
