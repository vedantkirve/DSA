// 0 - 01
// 1 - 10

// n = 1 k =1 , ---- 0
// n = 2, k = 2 ---- 0 1
// n = 3, k = 3 ---- 0 1 1 0 
// n = 4, k = 4 ---- 0 1 1 0 1 0 0 1

function solve(n,k){
    if (n === 1 && k === 1){
        return 0
    }

    let mid = Math.pow(2, n-1)/2

    if ( k<= mid){
        return solve(n-1, k)
    }
    else{
        let a = solve(n-1, k-mid)

        return a === 0 ? 1 : 0
    }
}


console.log("ans::",solve(4,5))