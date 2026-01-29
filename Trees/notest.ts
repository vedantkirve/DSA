export {}

// class TreeNode{
//     val: number
// }

interface TreeNode{
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function BFS(root: TreeNode): number[][]{
    const result: number[][] = []
    if(!root){
        return result
    }

    const queue: TreeNode[] = [root]
    while(queue.length > 0){
        
        const length: number = queue.length
        const level: number[] = [];

        for(let i = 0 ; i < length ; i++){
            const node: TreeNode =  queue.shift()! 
            level.push(node.val);

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }   
            
        }
        result.push(level);
    }


    return result

}