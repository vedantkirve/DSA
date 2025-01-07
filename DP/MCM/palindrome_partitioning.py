s = "sniting" # ans should be 2
# s = "nitin" # ans should be 0
# find how many paritions are required in order to find if its a palindrome

n = len(s)

i = 0
j = n -1

def isPalindrome(s,i,j):
    
    while(i<j):
        if s[i] != s[j]:
            return False
        i +=1
        j -=1    
    return True

# def solve(s,i,j):
#     if i>=j or isPalindrome(s,i,j):
#         return 0
    
#     mn = float("inf")
#     for k in range(i,j):
#         temp = solve(s,i,k) + solve(s,k+1,j) + 1 # this +1 as already one partion has happened
#         if temp < mn:
#             mn = temp
#     return mn

# ans = solve(s,i,j)
# print("ans-->>",ans)


#  ------------------- Memoization Appraoch ---------------------------

# Memoization table
n = len(s)
t = [[-1 for _ in range(n)] for _ in range(n)]

# Memoized solve function
def solve(s, i, j):
    # Base condition: If substring is already a palindrome or has one character
    if i >= j or isPalindrome(s, i, j):
        t[i][j] = 0
        return 0

    # Check if already computed
    if t[i][j] != -1:
        return t[i][j]

    mn = float("inf")

    # Partition the string at every possible point `k`
    for k in range(i, j):
        # Memoized calls for the left and right partitions
        left = solve(s, i, k)
        right = solve(s, k + 1, j)
        temp = left + right + 1  # Add 1 because this partition is counted

        # Update the minimum
        mn = min(mn, temp)

    # Store the result in the memoization table
    t[i][j] = mn
    return mn

print("ss----->>",s)
ans = solve(s,i,j)
print("ans-->>",ans)



    

    
