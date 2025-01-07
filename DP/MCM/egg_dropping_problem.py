
# recurssion approach
def solve(e, f):
    # Base case: if there are no floors or one floor, return the number of floors or 1
    if f == 0 or f == 1:
        return f

    # If only one egg left, try all floors one by one
    if e == 1:
        return f

    mn = float('inf')
   
    # Loop to try dropping an egg from each floor
    for k in range(1, f+1):
        # If egg breaks, we search below the current floor
        egg_broke = solve(e-1, k-1)

        # If egg does not break, we search above the current floor
        egg_dint_break = solve(e, f-k)

        # Calculate the number of attempts in the worst case (max of the two scenarios)
        temp = 1 + max(egg_broke, egg_dint_break)

        # Minimize the number of attempts in the worst case
        mn = min(temp, mn)
    
    return mn

# Test with 3 eggs and 5 floors
# ans = solve(2, 5)
# print("Minimum number of attempts in the worst case:", ans)


# memoization appraoch
egg = 3
floor = 5

# Initialize memoization table
t = [[-1 for _ in range(floor + 1)] for _ in range(egg + 1)]

def solve(egg, floor):
    # Base conditions
    if floor == 0 or floor == 1:  # 0 or 1 floor needs the same attempts
        return floor
    if egg == 1:  # Only one egg left, test all floors
        return floor

    # Return precomputed result
    if t[egg][floor] != -1:
        return t[egg][floor]

    mn = float('inf')
    for k in range(1, floor + 1):
        # Recursive calls
        egg_breaks = solve(egg - 1, k - 1)  # If egg breaks
        egg_doesnt_break = solve(egg, floor - k)  # If egg doesn't break

        # Take the worst case
        temp = 1 + max(egg_breaks, egg_doesnt_break)

        # Store the minimum attempts
        mn = min(mn, temp)

    # Store result in memoization table
    t[egg][floor] = mn
    return mn

# Solve the problem
ans = solve(egg, floor)
print("Minimum attempts:", ans)


