const  nums = [-1,0,1,2,-1,-4];
// [-4,-1,-1,0,1,2]
//Requirement->>>> nums[i] + nums[j] + nums[k] == 0.
// Output: [[-1,-1,2],[-1,0,1]]

// total ->  -3 
//  -1 , 0 + y = 0
//  [-1,0,1 ]
//  [0,1,-1]
//  [2,-1,-1]
//  [-1,-4]

const arr = nums.sort((a,b)=>a-b)
// [ -4, -1, -1, 0, 1, 2 ]
console.log("sorted_array",arr)

// let i = 0;
// let j = nums.length - 1 ;

// let i_prev_val = nums[i];
// let j_prev_val = nums[j];
// let k = i+1;
// let k_prev_val ;

const ans = [];

// console.log("i",i,"j",j,"k",k)
// while(k<j){
//     console.log("i INSIDE",i,"j",j,"k",k)
//     const third_val = arr[i] + arr[k] + arr[j];

//     console.log("third_val-->>",third_val);
    

//     if(third_val === 0){
//         // its a triplet
//         const triplet_array = [arr[i],arr[k],arr[j]]
//         ans.push(triplet_array)
//         while(i<j && i_prev_val != nums[i]){
//             i_prev_val = nums[i];
//             i++;
            
//         }
//     }
//     else if(third_val > 0){
//         while(j>k && j_prev_val != nums[j]){
//             j_prev_val = nums[j]
//             j--;
//         }
//         // reduce j
//     }else{
//         // increase k also keep increasing untill we find a different value
//         while(k < j && k_prev_val != nums[k]){
//             k_prev_val = nums[k]
//             k++;
//         }
//     }
// }

console.log("ans-->>",ans)


for(let i =0 ;i < arr.length -2 ;i++){
    if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates for i

    let k = i +1
    let j = arr.length -1

    while (k < j) {
        const third_val = arr[i] + arr[k] + arr[j];

        if (third_val === 0) {
            ans.push([arr[i], arr[k], arr[j]]);

            while (k < j && arr[k] === arr[k + 1]) k++;
            while (k < j && arr[j] === arr[j - 1]) j--;

            k++;
            j--;
        } else if (third_val > 0) {
            j--;
        } else {
            k++;
        }
    }
}


console.log("ans-->>",ans)

