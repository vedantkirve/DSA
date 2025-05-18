// h hours
// can eat k bananas each hour

// k should be min -> all bananas are over 

// piles = [3,6,7,11], h = 8

const piles = [3,6,7,11]
const h = 8

function isValid({ k, h, piles }) {
    let hours_needed = 0;

    for (const pile of piles) {
        // Use Math.ceil to count how many hours needed for this pile at speed k
        hours_needed += Math.ceil(pile / k);
    }

    return hours_needed <= h;
}


function checker({h,piles}){
    let left = 1;   
    let right = Math.max(...piles)

    console.log("left-->>",left);
    console.log("right-->>",right);

    let current_valid;
    while(left < right){
        const k = Math.floor((left+right)/2)

        

        const is_valid = isValid({k,h,piles})
        console.log("is_valid",is_valid,"k-->>",k);
        

        if(is_valid){
            current_valid = k;
            right = k - 1;
        }else{
            left = k + 1;
        }
    }

    return current_valid;
}

var minEatingSpeed = function(piles, h) {
    const ln = piles.length
    if(ln> h){
        return 0
    }else if(ln === h){
        return Math.max(...piles)
    }else{
       const ans = checker({h,piles})

       console.log("ans-->>",ans)

    }  
};

minEatingSpeed(piles,h)


