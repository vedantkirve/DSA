const arr = [1,3,-1,-3,5,3,6,7]
const k = 3
// expected ans = [3,3,5,5,6,7]


let i = 0
let max = -Infinity
for(let j= 0; j< arr.length; j++){
    max = Math.max(max,arr[j])

    if((j-i+1 )=== k){

    }

}