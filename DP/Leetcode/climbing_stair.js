// function solve(current_step, n) {
//     // Base Cases
//     if (current_step === n) return 1; // Found a valid way
//     if (current_step > n) return 0; // Exceeded steps, invalid way

//     // Recursive Calls
//     const count_of_1_steps = solve(current_step + 1, n);
//     const count_of_2_steps = solve(current_step + 2, n);

//     return count_of_1_steps + count_of_2_steps;
// }

function solve(ans,n){
    // if (n === 0 || n ===1 ){
    //     ans[n] = 1
    // }

    for(let i = 2; i<=n;i++){
        ans[i] = ans[i-1] + ans[i-2]
    }

    console.log("n-->>",n)
    return ans[n]
}

var climbStairs = function(n) {
    const ans = []
    for(let i=0;i<=n;i++){
        ans.push(1)
    }
    return solve(ans, n);
};

// Test case
console.log("anns--->>", climbStairs(4)); // Output: 2
