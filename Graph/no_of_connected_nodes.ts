export {};

// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/

// const n: number = 6
// const edges: [number, number][] = [[0,1], [1,2], [2,3], [4,5]]

const n: number = 5
const edges: [number, number][] = [
  [0,1],
  [2,3],
  [1,2]
]

const parent: number[] = []
for(let i = 0; i < n; i++){
    parent[i] = i
}

console.log("parent-->>",parent)

function find(node: number): number{
    if(parent[node] != node){
        parent[node] = find(parent[node])
    }
    return parent[node]
}

for(let i = 0 ; i < edges.length ; i++){
    const [u,v] = edges[i]
    const pu = find(u)
    const pv = find(v)
    if(pu !== pv){
        parent[pv] = pu
        for(let i = 0 ; i < parent.length ; i++){
            if(parent[i] === pv){
                parent[i] = pu
            }
        }
    }
}


// 🔑 Important: compress all paths
const roots = new Set<number>()
for (let i = 0; i < n; i++) {
    roots.add(find(i)) // when 2 is parent-->> [ 0, 0, 0, 2, 4 ] it will again go to 2 as its not current value
    //  at that position and change it to its parent Value
}

console.log("ans ->>", roots.size)

