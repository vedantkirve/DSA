// ❓ Problem Statement
// You are given a 2D grid representing a building floor plan. Each cell in the grid can be one of the following:

// -1 → a wall that cannot be passed through

// 0 → a gate

// 2147483647 (2³¹ - 1) → an empty room (this represents infinity)

// Your task is to fill each empty room with the number of steps it takes to reach the nearest gate. You can move up, down, left, or right — no diagonal movement allowed.
// If a gate is unreachable from an empty room, leave it as 2147483647.

// You must modify the grid in place. Do not return anything.

const rooms = [
    [2147483647, -1,         0,         2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1,         2147483647, -1],
    [0,          -1,         2147483647, 2147483647]
];


const rows = rooms.length;
const cols = rooms[0].length;
const queue = []
const directions = [[-1,0] , [0,1], [1,0], [0,-1]]

for(let i =0 ; i< rows ;i++){
    for(let j =0 ; j< cols ;j++){
        if(rooms[i][j] === 0){
            queue.push([i,j])
        }
    }
}

console.log("queue-->>",queue)

while(queue.length > 0){
    const elem = queue.shift();
    const [x,y] = elem
    let gateCount = 0
    if(rooms[x][y] === 0){
        gateCount = 0
    }else {
        gateCount = rooms[x][y]
    }

    // console.log("gateCount-->>",gateCount,"elem-->>",elem);
    

    for(let i = 0 ; i< directions.length ; i++){
        
        const direction = directions[i]
        const dx = direction[0];
        const dy = direction[1];
        const X = x + dx
        const Y = y + dy

       
        
        if(X < 0 || X>= rows || Y <0 || Y>=cols || rooms[X][Y] === 1){
            continue
        }

        // if empty room increase its counter
        if(rooms[X][Y]=== 2147483647){
            console.log("elem",elem, "X",X,"Y",Y,"gateCount",gateCount)
            rooms[X][Y] = gateCount + 1
            queue.push([X,Y])
        }
    }
}

console.log("rooms-->>",rooms)




  