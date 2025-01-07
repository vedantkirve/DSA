a = [1,4,6,5,2,3]

function reverse(a){

    if(a.length == 1){
        return a;
    }

    let lastEelement = a.pop();
    reverse(a)

    a.splice(0, 0, lastEelement);

    return a
}

console.log("ans::",reverse(a))
