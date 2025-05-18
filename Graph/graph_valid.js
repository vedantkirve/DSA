Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false  // there's a cycle (1-2-3-1)

//   0
// / | \
// 1  2  3
// /
// 4


function isValid(){
    const visited = []

    // create a graph out of it
    const graph = new Map();

    // Initialize the graph for all nodes (from 0 to n-1)
    for (let i = 0; i < n; i++) { // Loop through all nodes, not just edges
        graph.set(i, []); // Initialize an empty array for each node
        visited.push(false); // Initialize visited array for all nodes
    }

    for(let i = 0 ; i< edges.length ; i++){
        const [node, neighbour] = edges[i]

        graph.get(node).push(neighbour);
        graph.get(neighbour).push(node);
    }

    console.log("graph", graph)

    // edge counts check n nodes then n-1 edges should be there
    if (edges.length !== n - 1) {
        return false; // A tree with `n` nodes must have exactly `n - 1` edges
    }

    // cyclic check

    function dfs(node, parentNode, visited){
        visited[node] = true

        const neighbours = graph.get(node);

        for(const neighbour of neighbours){
            if(!visited[neighbour]){
                dfs(neighbour, node, visited);  // Corrected the DFS call here
            }else if(visited[neighbour] && neighbour != parentNode){
                return false; // cycle detected
            }
        }
        return true;
    }

    // Starting DFS from node 0
    const isCyclic = dfs(0, -1, visited);  // Updated parent to -1 since there's no parent for the starting node

    console.log("isCyclic", isCyclic)

    for(let i = 0 ; i < visited.length; i++){
        if(!visited[i]){
            return false; // If any node is not visited, it's not connected
        }
    }

    return true; // Valid graph (tree)

}

console.log("isValid",isValid())







