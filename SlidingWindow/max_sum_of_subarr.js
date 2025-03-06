const arr = [2,5,1,8,2,9,1];
const k = 3
// max of sum of subarray

let j = 0;
let maxSum = -Infinity
let total = 0

for (let i = 0; i < arr.length; i++) {
    total += arr[i];  // Add current element to window sum
    
    if ((i - j + 1) === k) {  // ✅ Check when window size reaches `k`
        maxSum = Math.max(maxSum, total);  // Store max sum
        total -= arr[j];  // Remove element going out of window
        j++;  // Slide the window
    }
}

console.log("maxSum-->>",maxSum)