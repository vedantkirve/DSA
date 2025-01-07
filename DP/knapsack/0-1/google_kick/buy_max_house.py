budget = 50
# arr = [20,90,40,90]
arr = [30,30,10,10]

Wt = budget
n = len(arr)

t = []

for i in range(0, n+1):
    child = [None] * (Wt+1)
    t.append(child)

for i in range(0, n+1):
    for j in range(0, Wt+1):
        if i ==0 or j == 0:
            t[i][j] = 0
        else:
            if arr[i-1] <= j:
                t[i][j] = max(1 + t[i-1][j-arr[i-1]], t[i-1][j])
            else:
                t[i][j] = t[i-1][j]
            

print("ans-->>",t[n][Wt])