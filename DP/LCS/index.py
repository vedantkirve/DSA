# LONGEST COMMON SUBSEQUENCE DOES NOT HAVE TO BE CONTINOUS

# recurssive approach
def LCS(x: str, y: str, n: int, m: int) -> int:
    # Base condition: If either string is empty, LCS length is 0
    if n == 0 or m == 0:
        return 0

    # If last characters match, include it in LCS
    if x[n - 1] == y[m - 1]:  # Use n-1 and m-1 for zero-based indexing
        return 1 + LCS(x, y, n - 1, m - 1)
    else:
        # Otherwise, take the maximum of ignoring either string's last character
        return max(LCS(x, y, n - 1, m), LCS(x, y, n, m - 1))

# recurssive appraoch with memoization

def memoizationLCS(x:str, y: str, n: int, m: int) -> int:
    if m==0 or n==0:
        return 0

    if t[n][m] != -1: #already visited so to avoid recursivve call
        return t[n][m]

    if x[n-1] == y[n-1]:
        t[n][m] = 1 + memoizationLCS(x,y,n-1,m-1)
        return t[n][m]
    else:
        t[n][m]  = max(memoizationLCS(x,y,n-1,m),memoizationLCS(x,y,n,m-1)) 
        return t[n][m]
    

# for i in range(0,n+1):
#     for j in range(0,m+1):
#         if i == 0:
#             t[i][j] = float('inf')
#         elif j ==0:
#             t[i][j] = 0:
#         else


# Input strings
x = "abcdgh"
y = "abedfh"
n= len(x)
m = len(y)

# Call the function

#------------------recurssiveCall-------------------------------
# val = LCS(x, y, n, m) #recurssiveCall


#------------------ MEMOIZATION RECURSSIVE CALL-----------------
# t = []
# for i in range(0,n+1):
#     child = [-1]* (m+1)
#     t.append(child)
# val = memoizationLCS(x, y, n, m)


#------------TOP Down Approach ----------------------------------
t=[]
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)

for i in range(0,n+1):
    for j in range(0,m+1):
        if i==0 or j ==0:
            t[i][j] = 0
        else:
            if(x[i-1]==y[j-1]):
                t[i][j] = 1+ t[i-1][j-1]
            else:
                t[i][j] = max(t[i][j-1], t[i-1][j])

val = t[n][m]
print("LCS Length:", val)
