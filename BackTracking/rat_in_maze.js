const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
  ];
  
  const final_ans = [];
  const n = maze.length - 1;
  
  function isValid(i, j) {
    return i >= 0 && i <= n && j >= 0 && j <= n && maze[i][j] === 1;
  }
  
  function isSolved(i, j) {
    return i === n && j === n && maze[i][j] === 1;
  }
  
  const choices = [
    { direction: 'U', x: -1, y: 0 },
    { direction: 'D', x: 1, y: 0 },
    { direction: 'L', x: 0, y: -1 },
    { direction: 'R', x: 0, y: 1 }
  ];
  
  function solve(i, j, ans) {
    // Base condition
    if (isSolved(i, j)) {
      const s = ans.join('');
      final_ans.push(s);
      return;
    }
  
    for (const choice of choices) {
      const { direction, x, y } = choice;
      const nextI = i + x;
      const nextJ = j + y;
  
      if (isValid(nextI, nextJ)) {
        ans.push(direction);
        maze[i][j] = 0; // Mark as visited
        solve(nextI, nextJ, ans);
        maze[i][j] = 1; // Unmark (backtrack)
        ans.pop();
      }
    }
  }
  
  solve(0, 0, []);
  console.log("All possible paths: ", final_ans);
  