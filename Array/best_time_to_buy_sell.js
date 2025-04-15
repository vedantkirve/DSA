const prices = [7,3,6,1,5];
// [2,1]
// buy -> 1, min ->1 , max -> 1
// sell -> 5 , max -> 6
// profite -> 4 , 5, 

// [7,6,4,3,1]
// buy -> 7 min -> 7, max -> 7
// buy -> 6 , min -> 6 , max -> 6
// buy -> 4, min -> 4

let min = Number.POSITIVE_INFINITY  // lowest possible number
let max = Number.NEGATIVE_INFINITY // highest possible number
let profit = 0 

for(let i = 0 ; i< prices.length;i++){
    min = Math.min(min,prices[i])
    max = Math.max(max,prices[i])
    if(min === prices[i]){
        max = min
    }
    profit = Math.max(profit, max - min);
}

console.log('profit-->>',profit)



// cur -> 7