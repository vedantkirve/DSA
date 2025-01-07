x = "abcde"
y = "abfce"
n = len(x)
m = len(y)

t = []
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)

for i in range(0,n+1):
    for j in range(0,m+1):
        if i==0 or j ==0:
            t[i][j] = 0
        else:
            if(x[i-1]==y[i-1]):
                t[i][j] = 1+ t[i-1][j-1]
            else:
                t[i][j] = 0

ans = 0
for i in t:
    for j in i:
        if j > ans:
            ans = j


# as it can exists anywhere in the matrix
print("ans-->>",ans)