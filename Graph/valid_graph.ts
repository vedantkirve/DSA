// https://algo.monster/liteproblems/261?utm_source=chatgpt.com


// Example 1: Valid Tree

const n: number = 5; 
const edges: [number, number][] = [[0,1], [0,2], [0,3], [1,4]];

// const n = 5;
// const edges: [number, number][] = [
//   [0,1],
//   [1,2],
//   [2,3],
//   [3,1], // 🔴 cycle here
//   [3,4]
// ];

// const n = 5;
// const edges: [number, number][] = [
//   [0,1],
//   [1,2],
//   [3,4] // disconnected
// ];


// Unio merge

// [0,1,2,3,4]
// [0,0,0,0,0]

function checkGraph(n: number, edges: [number, number][]): boolean{
    if (edges.length !== n - 1) return false;

    const parentNodes: number[] = []

    for(let i = 0; i < n; i++){
        parentNodes[i] = i
    }

     function find(node: number): number {
        if (parentNodes[node] !== node) {
            parentNodes[node] = find(parentNodes[node]);
        }
        return parentNodes[node];
    }


    for(let i = 0 ; i < edges.length; i++){
        const [u, v] = edges[i] 

        if(find(u) === find(v)){
            return false
        }else{
            // merge
            parentNodes[find(v)] = find(u)
        }
    }

    console.log("parentNodes", parentNodes)

    return true

}

console.log("called")
const ans: boolean = checkGraph(n, edges)
console.log("ans-->>",ans)