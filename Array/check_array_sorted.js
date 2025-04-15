const nums = [1,2,3]


function checker(nums){
    for (let i= 0 ; i< nums.length -1 ; i++){
        if(nums[i]> nums[i+1]){
            return false;
        }
    }
    return true
}

var check = function(nums) {   
    for(let i =0;i<nums.length -1 ;i++){
        if(nums[i]>nums[i+1]){
            const breaking_point = i+1
            
            const rotated_arry = nums.slice(breaking_point)

            const new_arry = [ ...rotated_arry , ...nums.slice(0,breaking_point)]

            console.log("new_arry-->>",new_arry);
            return checker(new_arry)

            
            



        }
    }

    return true;
};

const ans = check(nums)
console.log("ans-->>",ans);

// optimized solution would be
