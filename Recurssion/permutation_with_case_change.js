s = 'ab'

let op =''

function solve(ip , op){
    if(ip.length === 0){
        console.log("op::",op)
        return ;
    }
    let op1 = op + ip[0];
    let op2 = op + ip[0].toUpperCase()

    let newIp = ip.slice(1)

    solve(newIp, op1)
    solve(newIp, op2)

    return

}

solve(s,op)