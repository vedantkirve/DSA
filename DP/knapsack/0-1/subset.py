arr = [2, 3, 7, 8 ,10]
sm = 11

Wt = sm
n = len(arr)

t = [[None for _ in range(Wt + 1)] for _ in range(n + 1)]

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

print("t-->>",t)


