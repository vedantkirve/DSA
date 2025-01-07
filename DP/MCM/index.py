# Our goal is to minimize the scalar multiplications.

# Step 1 - find i and j 
arr  = [40, 20, 30, 10, 30]

# IMPORTANT (arr[i-1] * arr[k] * arr[j]) why this (40 * 30) * (30 *10) => 40 * 30 * 10

def solve(arr, i, j):
    if i >= j:  # Base condition
        return 0

    mn = float('inf')

    for k in range(i, j):
        # Recursively solve left and right parts, and calculate the multiplication cost
        temp = (
            solve(arr, i, k) +  # Left subproblem
            solve(arr, k + 1, j) +  # Right subproblem
            arr[i - 1] * arr[k] * arr[j]  # Multiplication cost
        )

        # Update minimum cost
        if temp < mn:
            mn = temp

    return mn

# Initialize i and j for the full array
i = 1
j = len(arr) - 1

# Get the answer
# ans = solve(arr, i, j)

# print("ans-->>", ans)


#  memoization approach for the same

# Memoization table
t = []

def solve(arr, i, j):
    # Base condition
    if i >= j:
        return 0

    # Check if already computed
    if t[i][j] != -1:
        return t[i][j]

    mn = float("inf")

    # Try every possible split
    for k in range(i, j):
        # Calculate cost of multiplication
        temp = (
            solve(arr, i, k) +
            solve(arr, k + 1, j) +
            arr[i - 1] * arr[k] * arr[j]
        )

        # Update minimum
        if temp < mn:
            mn = temp

    # Store the result in the memoization table
    t[i][j] = mn
    return mn


# Input array
arr = [40, 20, 30, 10, 30]

# Initialize memoization table dynamically
n = len(arr)
t = [[-1 for _ in range(n)] for _ in range(n)]

# Get the answer
i = 1
j = len(arr) - 1
ans = solve(arr, i, j)

print("ans-->>", ans)



