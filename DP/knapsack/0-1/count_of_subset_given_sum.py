arr = [2,3,5,6,8,10]
sm = 10

Wt = sm
n = len(arr)

t=[]
for i in range(0, n +1):
    child = [0]*(Wt+1)
    t.append(child)

print("t-->>",t)

for i in range(0, n +1):
    for j in range(0,  Wt + 1):
        if j==0:
            t[i][j] = 1
        elif i==0:
            t[i][j] = 0
        else:
            if arr[i-1] <= j:
                t[i][j] = t[i-1][j-arr[i-1]] + t[i-1][j]
            else:
                t[i][j] = t[i-1][j]

print("ans-->>",t[n][Wt])