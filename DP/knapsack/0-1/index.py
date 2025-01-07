# memoization to avoid repeatative recussive calls
# create 2d array of size (n + 1) * (W + 1)

arr = [[-1 for i in range(4 + 1)] for j in range(5 + 1)]

print("arr", arr)

def knapsack(W, wt, val, n):
    if n == 0 or W == 0: #no item left to pic or bag is full
        return 0

    if t[n][w] != -1: # condition to return as this recursive call is already done
        return 
    
    if wt[n - 1] > W: # if wt is greater of the elem to put in the bag called knapsack 
        return t[n][w]= knapsack(W, wt, val, n - 1)
    else:
        return t[n][w] = max(val[n - 1] + knapsack(W - wt[n - 1], wt, val, n - 1), knapsack(W, wt, val, n - 1))
        # here choice is to either take the current element or not take the current element 

# -----------------------

# create 2d array of size (n + 1) * (W + 1)
n = 4
W = 5
arr = [[-1 for i in range(n + 1)] for j in range(W + 1)]
def topDownApproach():
    for i in range(n + 1):
        for j in range(W+1):
            if i == 0 or j == 0: #base condition when no item left ot pick or bad is full
                arr[i][j] = 0
            
            if wt[i-1]<= Wt:
                arr[i][j] = max(val[i-1] + arr[i-1][j-wt[i-1]], arr[i-1][j]) # put value of max of two choices
            else:
                arr[i][j] = arr[i-1][j] # weight of that elemt greated than bag capacity so we can't take it
