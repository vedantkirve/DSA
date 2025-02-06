N = 2;
let ans = []

function solve(N, ans, s){

    console.log("Inside Solve fn s-->>>",s)
    // base condition
    if(N===0){
        console.log("Inside base condition")
        ans.push(s.join(''))
        return
    }
    const end_varibale = s.length > 0 ? s[s.length - 1] : 0;

    console.log("end_varibale-->>",end_varibale)

    for(let i = end_varibale +1 ; i <= 9; i++){
        console.log("Inside for Lopp fn", "current i -->> ",i)
        s.push(i)
        solve(N-1, ans, s)
        s.pop()
    }
}
const s = []

solve(N,ans,s)

console.log("ans-->>",ans)
