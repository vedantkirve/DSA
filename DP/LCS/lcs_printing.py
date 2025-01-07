x = "abcdgh"
y = "abedfh"
n= len(x)
m = len(y)

t=[]
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)

# approach for storing the value in array itself not so optimized as string can become very huge
for i in range(0,n+1):
    for j in range(0,m+1):
        if i == 0 or j == 0:
            t[i][j] = ""
        elif x[i-1] == y[j-1]:
            t[i][j] = t[i-1][j-1] + x[i-1]
        else:
            t[i][j] = t[i - 1][j] if len(t[i - 1][j]) > len(t[i][j - 1]) else t[i][j - 1]

val = t[n][m]
print("LCS", val)

#storing the length itself and then logic to printing the string
for i in range(0,n+1):
    for j in range(0,m+1):
        if i==0 or j ==0:
            t[i][j] = 0
        else:
            if(x[i-1]==y[j-1]):
                t[i][j] = 1+ t[i-1][j-1]
            else:
                t[i][j] = max(t[i][j-1], t[i-1][j])

i = n
j = m

ans = ""
while(i > 0 and j >0):
    if x[i-1] == y[i-1]:
        ans = x[i-1] + ans
        i -= 1
        j -= 1
    else:
        if t[i-1][j] > t[i][j-1]:
            i -=1
        else:
            j -= 1 
print("ans-->>",ans)



