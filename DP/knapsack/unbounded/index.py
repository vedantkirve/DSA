# Given a knapsack weight, say capacity and a set of n items with certain value vali and weight wti, The task is to fill the knapsack in such a way that we can get the maximum profit.
#  This is different from the classical Knapsack problem, here we are allowed to use an unlimited number of instances of an item.

# Input: capacity = 100, val[]  = [1, 30], wt[] = [1, 50]

# capacity = 100
# val = [1,30]
# wt = [1,50]

capacity = 8
val = [10, 40, 50, 70]
wt  = [1, 3, 4, 5]  

t = []
n = len(wt)
Wt = capacity

for i in range(0,n+1):
    child= [0]*(Wt+1)
    t.append(child)
print("t-->>",t)

for i in range(0,n+1):
    for j in range(0,Wt+1):
        if j == 0 or i == 0:
            t[i][j] = 0
        else:
            if wt[i-1] <= j:
                t[i][j] = max(val[i-1] + t[i][j-wt[i-1]], t[i-1][j])
            else:
                t[i][j] = t[i-1][j]



def capacityCheck(Wt, val, wt, i):
    # Base conditions
    if Wt == 0 or i == 0:
        return 0

    # If the current item's weight is less than or equal to the remaining capacity
    if wt[i-1] <= Wt:
        # Include the item (unbounded, so index remains `i`) or exclude the item
        return max(val[i-1] + capacityCheck(Wt-wt[i-1], val, wt, i), 
                   capacityCheck(Wt, val, wt, i-1))
    else:
        # Exclude the current item
        return capacityCheck(Wt, val, wt, i-1)

# print("ans-->>",t[n][Wt])

i = len(wt) + 1
print("Recursive answer:", capacityCheck(capacity, val, wt, n))
    
