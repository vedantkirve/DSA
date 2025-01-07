class Node{ 
    constructor(val ,left, right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function height(node){
    if(node == undefined){
        return ;
    }

    let left = height(node.left);
    let right = height(node.right);

    return 1 + max(left , right)
}

height(node)


// const height = () =>{
// }

// const 