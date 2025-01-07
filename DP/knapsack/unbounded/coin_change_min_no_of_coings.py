arr = [1, 2, 3]  # Coin denominations
sm = 6  # Target sum

n = len(arr)  # Number of coins
Wt = sm  # Target sum alias

# Step 1: Initialize DP table
t = []
for i in range(n + 1):
    row = []
    for j in range(Wt + 1):
        if j == 0:  # If the target sum is 0, no coins are needed
            row.append(0)
        else:  # If no coins are available, it's impossible to achieve the sum
            row.append(float('inf'))
    t.append(row)

# Step 2: Fill the DP table using the bottom-up approach
for i in range(1, n + 1):  # Iterate through coins
    for j in range(1, Wt + 1):  # Iterate through all target sums
        if arr[i - 1] <= j:
            # Option 1: Include the current coin (reduce sum by coin value)
            # Option 2: Exclude the current coin
            t[i][j] = min(t[i][j - arr[i - 1]] + 1, t[i - 1][j])
        else:
            # Exclude the current coin
            t[i][j] = t[i - 1][j]

# Step 3: Get the result
result = t[n][Wt]
if result == float('inf'):
    print("It's not possible to achieve the target sum with the given coins.")
else:
    print("Minimum number of coins required:", result)
