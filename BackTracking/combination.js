function solve(i,n,k,temp,final_ans){
    // bc
    if(temp.length === k){
        console.log("before temp push",final_ans);
        
        final_ans.push([...temp]);  
        console.log("final_ans-->>",final_ans)
        return
    }

    for(let j = i; j <=n; j++){
        console.log("j-->>",j)
        temp.push(j)
        console.log("temp-->>",temp)
        solve(j+1,n,k,temp,final_ans)
        temp.pop()
    }
}

function combine(n, k) {
    const final_ans= []
    const temp = []
    solve(1,n,k,temp,final_ans)
    return final_ans
};

const ans = combine(4,2)
console.log("ans-->>",ans)

