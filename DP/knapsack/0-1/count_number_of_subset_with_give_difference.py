arr = [1,1,2,3]
diff = 1

sm = 0
for i in arr:
    sm+=i

# s1 - s2 = diff 
# s1 + s2 = sum(arr)

# s1 = (diff + sum(arr))//2

s1 = (diff + sm )//2
print("s1==>>",s1)


n = len(arr)
Wt = s1

# check if diff lies within the range also check if its subset exists

t =[]
for i in range(0,n+1):
    child = [0]*(Wt+1)
    t.append(child)

print("t-->>",t)

for i in range(0,n+1):
    for j in range(0,Wt+1):
        if j == 0 :
            t[i][j] = 1
        elif i == 0:
            t[i][j] = 0
        else:
            if arr[i-1] <= j:
                t[i][j] = t[i-1][j-arr[i-1]] + t[i-1][j]
            else:
                t[i][j] = t[i-1][j]

print("ans-->>",t[n][Wt])
