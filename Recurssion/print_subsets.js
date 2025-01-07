s = 'abc'

let arr = []

function subSets(ip , op, arr){

    if(ip.length === 0){
        // console.log("ans::" , op)
        arr.push(op)
        return op
    }

    let op1 = op;
    let op2 = op + ip[0];

    // console.log("op1:",op1,"op2::",op2)

    let newIp = ip.slice(1)

    // console.log("newIp::",newIp)

    subSets(newIp,op1, arr)
    subSets(newIp,op2, arr)

    return arr
}

console.log(subSets(s, "" , arr))