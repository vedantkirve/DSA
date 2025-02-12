const n = 4; // Change this for different board sizes

const final_ans = [];
const visited_array = new Array(n).fill().map(() => new Array(n).fill(false)); // 2D board

function checker(row, col, visited_array, n) {
    // Check the same row (horizontal)
    for (let j = 0; j < col; j++) {
        if (visited_array[row][j]) return false;
    }

    // Check upper-left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (visited_array[i][j]) return false;
    }

    // Check lower-left diagonal
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (visited_array[i][j]) return false;
    }

    return true;
}

function solve(col, temp) {
    // Base condition: If all columns are filled, store the solution
    if (col === n) {
        final_ans.push([...temp]);
        return;
    }

    // Try placing the queen in each row for the current column
    for (let row = 0; row < n; row++) {
        if (checker(row, col, visited_array, n)) {
            visited_array[row][col] = true;
            temp.push(row); // Store row index where queen is placed
            solve(col + 1, temp);
            visited_array[row][col] = false; // Backtrack
            temp.pop();
        }
    }
}

// Start solving from column 0
solve(0, []);

console.log("All possible solutions (in row index format):", final_ans);

// Convert indexes into board representation
function formatSolutions(final_ans, n) {
    const formatted_ans = [];

    for (const solution of final_ans) {
        const board = [];
        for (const row of solution) {
            let temp = Array(n).fill("."); // Fill row with '.'
            temp[row] = "Q"; // Place the queen
            board.push(temp.join(""));
        }
        formatted_ans.push(board);
    }

    return formatted_ans;
}

console.log("Formatted Solutions:");
console.log(formatSolutions(final_ans, n));
