a = [1,4,6,5,2,3]

let middleElementIndex =  Math.floor(Number(a.length)/2) 

console.log("middleElement::",a[middleElementIndex])


function solve(a, element){

    // if (a.length === 0 ){
    //     return 
    // }

    // if (a.length === 1){
    //     return a[0]
    // }

    if (a[a.length-1] === element){
        a.pop()
        return a;
    }

    let lastEelement = a.pop()

    solve(a, element)

    a.push(lastEelement)

    return a;
}

console.log("ans::",solve(a, a[middleElementIndex]))