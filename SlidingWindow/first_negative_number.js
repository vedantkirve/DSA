const arr = [12,-1,-7,8,-15,30,16,28]
const negative_number = []
const k = 3
const final_ans = [] // first negative number in subarr

let i = 0
for(let j = 0 ;j < arr.length ;j++){
    if(arr[j]<0){
        negative_number.push(arr[j])
    }

    if((j-i+1) === k){
        if(negative_number[0]){
            final_ans.push(negative_number[0])
        }else{
            final_ans.push(0)
        }
        

        if(arr[i] === negative_number[0]){
            console.log("number i-->>",i,negative_number[0]);
            // negative_number.pop(0)
            const removed_number = negative_number.shift()
            console.log("removed_number-->>",removed_number);   
        }
        i++;
    }
}

console.log("final_ans-->>",final_ans)