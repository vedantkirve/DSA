# asked to find longest palindromic subsequence

x = "agbcba"

# for subsequence 2 strings required so b will be reverse of a
y = ''.join(reversed(x))

print("y-->>",y)
n = m = len(x)

t=[]
for i in range(0,n+1):
    child = [None]*(m+1)
    t.append(child)

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