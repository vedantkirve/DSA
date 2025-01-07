x = "AGGTAB"
y = "GXTXAYB"

n = len(x)
m = len(y)

# basically would be n + m - len(lcs)

t=[]
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)


for i in range(0,n+1):
    for j in range(0,m+1):
        if i ==0 or j == 0:
            t[i][j] = 0
        else:
            if x[i-1] == y[j-1]:
                t[i][j] = 1 + t[i-1][j-1]
            else:
                t[i][j] = max(t[i][j-1], t[i-1][j])

val = t[n][m]


ans = n + m - val
print("ans:", ans)