arr = [2,7,9,3,1]

t = [-1] * ( len(arr) )

print("t-->>",t)
def solve(arr,i, t):
    # base condition
    if i < 0:
        return 0

    if t[i] != -1:
        return t[i]

    robbery_money = max(solve(arr, i-2, t) + arr[i], solve(arr,i-1, t))
    t[i] = robbery_money

    return robbery_money



ans = solve(arr, len(arr)-1, t)

print("t after",t)
print("ans -->>",ans)


