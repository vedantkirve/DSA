function findSubarraysWithSum(arr, k) {
    let subarrays = [];
    let j = 0, sm = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sm += arr[i];
        
        // Shrink the window from the left if the sum exceeds k
        while (sm > k && j <= i) {
            sm -= arr[j];
            j++;
        }
        
        // If the sum matches k, add the subarray to the result
        if (sm === k) {
            subarrays.push(arr.slice(j, i + 1));
        }
    }
    
    return subarrays;
}

const arr = [4, 1, 1, 1, 2, 3, 5];
const k = 5;
console.log(findSubarraysWithSum(arr, k));