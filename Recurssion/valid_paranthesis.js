n = 4;

op = ''

let arr = []

function checkValid(o ,c){
    if(o<c){
        return true
    }
    return false;

}

function solve(ip, op, o ,c, arr){
    if (o === 0 && c === 0  ){
        arr.push(op)
        return 
    }

    let op1 = op + '('; // for open

    let op2 = op + ')';
    if( o > 0){
        solve(ip - 1, op1, o-1, c, arr)
    }

    if(o<c && c > 0){
        solve(ip - 1,op2, o, c-1 , arr)
    }
    // for close
    return 

}



solve(n , op, n, n, arr)

console.log("ans::", arr)