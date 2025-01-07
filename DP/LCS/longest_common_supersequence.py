x = "AGGTAB"
y = "GXTXAYB"

n = len(x)
m = len(y)

t=[]
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)


for i in range(0,n+1):
    for j in range(0,m+1):
        if i==0 and j ==0:
            t[i][j] = ""
        elif i == 0:
            t[i][j] = x[:j]
        elif j==0:
            t[i][j] = y[:i]
        else:
            if(x[i-1]==y[j-1]):
                t[i][j] = t[i-1][j-1] + x[i-1] 
            else:
                if len(t[i-1][j]) > len(t[i][j-1]):
                    t[i][j] = t[i-1][j] +  x[i-1]
                else:
                    t[i][j] =  t[i][j-1] + y[j-1] 

val = t[n][m]
print("LCS Length:", val)


