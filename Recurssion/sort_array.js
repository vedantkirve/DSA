a = [2,5,4,7,6,9,3]

console.log("last", a.slice(-1))

// let v = a.pop()

// console.log("ans", v, a)

function sort(array) {
    if (array.length <= 1) {
        return array;
    }

    let lastElement = array.pop();
    sort(array);

    let index = array.length - 1;

    while (index >= 0 && array[index] > lastElement) {
        array[index + 1] = array[index];
        index--;
    }

    array[index + 1] = lastElement;

    return array;
}




// function sort(array){

//     if (array.length === 1){
//         return array
//     }

//     let lastEelement = array.pop();

//     console.log("lastEelement::",lastEelement,array)

//     sort(array)

//     array.forEach((element, index) => {
//         if(element >= lastEelement){
//             array.splice(index, 0 , lastEelement)
//         }
//     })

//     return array
//     // insert(array,lastEelement)

//     // console.log("0000",array)

//     // array.forEach((element,index) => {
//     //     if(element >= lastEelement){
//     //         array.splice(index, 0 , lastEelement)
//     //     }
//     // });

//     // return array

// }

function insert(array, temp){

    if(array.length === 0 || array[array.length - 1] <= temp){
        array.push(temp)
        return
    } 
    let val = array.pop()
    insert(array, temp)

    array.push(val)

    return;
}


console.log("sort:",sort(a))