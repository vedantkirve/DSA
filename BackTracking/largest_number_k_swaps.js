k = 4
nmArr = "4577"
// "12345678"
nmArr = nmArr.split('')
console.log("nmArr::",nmArr)

ans = {
    "ans": parseInt(nmArr.join(''))
}

ln = nmArr.length


function swap(arr, s_index, e_index){
    console.log("Insdie swap");
    
    const temp = arr[s_index]
    arr[s_index] = arr[e_index]
    arr[e_index] = temp
}

function solve(nmArr, k, start_index){
    // Base condition
    if(k === 0 || start_index === (ln -1) ){
        console.log("k-->>",k,"start_index-->>",start_index);
        
        if (ans.ans < parseInt(nmArr.join(''))){
            ans.ans = parseInt(nmArr.join(''))
        }
    }

    // find max in this range(start_index+1 , ln)
    const val = Math.max(...nmArr.slice(start_index+1))
    console.log("val-->>",val);
    

    for(let i = start_index + 1; i < ln; i++){
        // console.log("nmArr[start_index]-->>",nmArr[start_index],"nmArr[i]-->>",nmArr[i],"i-->>",i);

        console.log("Condition",nmArr[start_index] < nmArr[i] || nmArr[start_index] === val);
        
        
        if(nmArr[start_index] < nmArr[i] || nmArr[start_index] === val){
            console.log("Inside if condition")

            console.log("Before-->>",nmArr);
            
            swap(nmArr, start_index, i)
            console.log("After-->>",nmArr);
            solve(nmArr, k-1, start_index+1)
            swap(nmArr, start_index, i)
        }
    }
}

solve(nmArr, k, 0)
console.log("ans::",ans.ans)