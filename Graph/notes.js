const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
}

function BFS() {
    const queue = [];
    const visited = {};

    const nodes = Object.keys(graph)
    const start = nodes[0]
    queue.push(start)
    visited[start] = true

    while (queue.length > 0) {
        const node = queue.shift() // A 
        const neighbours = graph[node]
        for (let i = 0; i < neighbours.length; i++) {
            const neighbour = neighbours[i]
            if (!visited[neighbour]) {
                visited[neighbour] = true;
                queue.push(neighbour)
            }
        }

    }

    console.log("visited-->>", visited)
}
BFS()

const visited = {}
function DFS(node) {
    visited[node] = true
    //  recurssive calls 
    const neighbours = graph[node]
    for (const neighbour of neighbours) {
        if (!visited[neighbour]) {
            DFS(neighbour)
        }
    }
}

const nodes = Object.keys(graph)
DFS(nodes[0])
console.log("VISITED OF DFS", visited)
