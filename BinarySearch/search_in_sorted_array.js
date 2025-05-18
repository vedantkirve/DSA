/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [3,1] ; const target = 3
// const target = 0;

function getPivotIndex(nums,target){
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const mid = Math.floor((left+right)/2)
        if(nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid
        }
    }

    return left
}


function binarySearch(nums,left,right, target){
    
    while(left <= right){
        console.log("left-->>",left,"right-->",right)
        const mid = Math.floor((left+right)/2)

        console.log("mid-->>",mid);
        

        if(nums[mid]=== target){
            return mid
        }else if (nums[mid] > target){
            right = mid -1
        }else{
            left = mid + 1
        }
    }


    return -1;
}
var search = function(nums, target) {

    const pivot_index = getPivotIndex(nums,target);
    console.log("pivot_index-->>",pivot_index);
    // check where it lies
    if(target >= nums[0] && target <= nums[pivot_index -1]){
        console.log("Inside If loop targe",target)
        return binarySearch(nums,0,pivot_index -1 ,target)
    }else{
        return binarySearch(nums,pivot_index, nums.length - 1,target)
    } 
};

console.log("ans-->>",search(nums,target))