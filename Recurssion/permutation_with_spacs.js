s = "abc"

ans  = [ 'a_bc', 'ab_c', 'a_b_c' , 'abc']

let op = 'a';
let newIp = s.slice(1)

function solve(ip , op){
    if(ip.length === 0){
        console.log("op::",op)
        return ;
    }
    let op1 = op + ip[0];
    let op2 = op + '_' + ip[0]


    let newIp = ip.slice(1)

    solve(newIp, op1)
    solve(newIp, op2)

    return

}

solve(newIp,op)

