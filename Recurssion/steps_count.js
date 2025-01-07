a = [2,3,1,1,4]

function solve(a){

    if(a.length === 1 ){
        return 0
    }

    let ele = a[0]

    let s ;

    for(let i = 0 ; i< ele ; i++){
        s = Math.min(1+solve(a.slice(i)),s);
    }
    return s

}

console.log("sss",solve(a))

