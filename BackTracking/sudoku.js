const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  
  function checkValid(row, col, board) {
      const allowed_number = {};
      for (let i = 1; i <= 9; i++) {
          allowed_number[i] = true;
      }
  
      // Check horizontal (row)
      for (let j = 0; j < 9; j++) {
          if (board[row][j] !== ".") {
              allowed_number[board[row][j]] = false;
          }
      }
  
      // Check vertical (column)
      for (let i = 0; i < 9; i++) {
          if (board[i][col] !== ".") {
              allowed_number[board[i][col]] = false;
          }
      }
  
      // Identify the 3x3 subgrid
      let startRow = Math.floor(row / 3) * 3;
      let startCol = Math.floor(col / 3) * 3;
  
      // Check subgrid
      for (let i = startRow; i < startRow + 3; i++) {
          for (let j = startCol; j < startCol + 3; j++) {
              if (board[i][j] !== ".") {
                  allowed_number[board[i][j]] = false;
              }
          }
      }
  
      // Prepare the return object
      const ans = { allowed: false, allowed_numbers: [] };
      for (let num = 1; num <= 9; num++) {
          if (allowed_number[num]) {
              ans.allowed_numbers.push(num.toString()); // Store as string
              ans.allowed = true;
          }
      }
  
      return ans;
  }
  
  function solve(row, col) {
      // Base case: If we reached the end of the board, return true (solved)
      if (row === 9) return true;
  
      // Move to the next cell (column-wise)
      let nextRow = row;
      let nextCol = col + 1;
      if (nextCol === 9) {
          nextRow += 1;
          nextCol = 0;
      }
  
      // If the current cell is already filled, move to the next one
      if (board[row][col] !== ".") {
          return solve(nextRow, nextCol);
      }
  
      const validCheck = checkValid(row, col, board);
      if (validCheck.allowed) {
          for (const option of validCheck.allowed_numbers) {
              board[row][col] = option; // Place number
              if (solve(nextRow, nextCol)) return true; // Recursively move forward
              board[row][col] = "."; // Backtrack
          }
      }
  
      return false; // No valid solution found
  }
  
  solve(0, 0);
  
  console.log("Solved Sudoku Board:");
  console.log(board);
//   console.table(board)
  