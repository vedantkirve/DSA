# s = "babad"
s = "aacabdkacaa"
x = s
y = ''.join(reversed(x))
n = m = len(x)
# if(n == 1):
#     return x

print("y-->>",y)

t = []
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
                t[i][j] = 0

def getValue( i, length, s):
        # Extract the substring directly using DP table and original string
        start = i - length  # Start index for the palindrome
        return s[start:i] 

# ans = 0
# substring = ""
# for i in t:
#     for j in i:
#         if j > ans:
#             ans = j
#             substring = getValue(j,ans)


ans = 0
substring = ""
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if t[i][j] > ans:
            ans = t[i][j]
            substring = getValue(i, ans, s)

# return substring

print("substring",substring)

