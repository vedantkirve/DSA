arr = [1,5,5,11]

total = 0
for i in arr:
    total+=i

print("total-->>",total)

t = []
n = len(arr)
W = total//2

print("n-->>",n)
print("W-->>",W)

for i in range(0,n+1):
    child = [False]*(W+1)
    t.append(child)
print("t-->>",t)

def checkEqualSumPartition(arr):
    for i in range(0, n +1):
        for j in range(0,  W + 1):
            if j == 0:  # Subset sum of 0 is always possible (by taking an empty set)
                t[i][j] = True
            elif i == 0:  # If no items are available, no subset can form a positive sum
                t[i][j] = False
            else:
                if arr[i-1] <= j:  # Include or exclude the current item
                    t[i][j] = t[i-1][j-arr[i-1]] or t[i-1][j]
                else:  # Exclude the current item
                    t[i][j] = t[i-1][j]



if total%2 == 0:
    #only possible when total is even
    checkEqualSumPartition(arr)
    print("ans-->>",t[n][W])
else:
    print("no")

#create array of n+1 and W+1
# t = []
    



