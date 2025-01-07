def solve(s, i, j, isTrue):
    # Base condition
    if i > j:
        return 0
    if i == j:
        if isTrue:
            return 1 if s[i] == "T" else 0
        else:
            return 1 if s[i] == "F" else 0

    ans = 0

    # Try every possible partition at operators
    for k in range(i + 1, j, 2):  # Operators are at odd indices
        # Evaluate left and right subexpressions
        lt = solve(s, i, k - 1, True)   # Left True
        lf = solve(s, i, k - 1, False)  # Left False
        rt = solve(s, k + 1, j, True)   # Right True
        rf = solve(s, k + 1, j, False)  # Right False

        # Evaluate based on the operator
        if s[k] == "|":
            if isTrue:
                ans += lt * rt + lt * rf + lf * rt
            else:
                ans += lf * rf
        elif s[k] == "&":
            if isTrue:
                ans += lt * rt
            else:
                ans += lt * rf + lf * rt + lf * rf
        elif s[k] == "^":
            if isTrue:
                ans += lt * rf + lf * rt
            else:
                ans += lt * rt + lf * rf

    return ans

# Test input
s = "T^F&T"
i = 0
j = len(s) - 1

# Count the number of ways to parenthesize to get True
ans = solve(s, i, j, True)
print("Number of ways to parenthesize to get True:", ans)
