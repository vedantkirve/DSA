x = "heap"
y = "pea"
# convert string a to string b


n = len(x)
m = len(y)

t = []
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)


for i in range(0,n+1):
    for j in range(0,m+1):
        if i == 0 or j == 0:
            t[i][j] = 0
        else:
            if x[i-1] == y[j-1]:
                t[i][j] = 1 + t[i-1][j-1]
            else:
                t[i][j] = max(t[i-1][j], t[i][j-1])

# i = n
# j = m

# ans = ""
# while(i > 0 or j >0):
#     if x[i-1] == y[i-1]:
#         ans = x[i-1] + ans
#         i -= 1
#         j -= 1
#     else:
#         if t[i-1][j] > t[i][j-1]:
#             i -=1
#         else:
#             j -= 1 
# print("ans-->>LCS",ans)


print("t[n][m]-->>",t[n][m], type(t[n][m]))
lcs_length = t[n][m]
min_addition = m - lcs_length
min_deletion = n - lcs_length


print("final ans addition",min_addition,"final deletion",min_deletion)

