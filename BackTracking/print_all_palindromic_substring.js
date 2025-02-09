const s = "geeks";
const ans = [];

function isValidPalindrome(i, j, s) {
  // Check if substring from index `i` to `j` is a palindrome
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function solve(s, i) {
  // Base condition
  if (i === s.length) {
    
    
    ans.push([...temp]); // Save the current partition
    return;
  }

  for (let j = i; j < s.length; j++) {  // `j` is the end index
    if (isValidPalindrome(i, j, s)) {
      const substring = s.slice(i, j + 1);
      
      
      temp.push(substring);
      solve(s, j + 1);
      temp.pop(); // Backtrack
    }
  }
}

const temp = [];
solve(s, 0);

console.log("All possible palindromic partitions:", ans);
