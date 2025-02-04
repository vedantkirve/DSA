const s = "abc";
const ans = [];
const ln = s.length;

function swap(arr, a_index, b_index) {
  const temp = arr[a_index];
  arr[a_index] = arr[b_index];
  arr[b_index] = temp;
}

function solve(s, start_index, ans) {
  // Base condition
  if (start_index === ln - 1) {
    ans.push(s.join(''));
    return;
  }

  const mp = {}; // Reset for each recursion level
  for (let i = start_index; i < ln; i++) {
    if (!mp[s[i]]) {
      mp[s[i]] = true;
      
      swap(s, start_index, i);
      solve(s, start_index + 1, ans);
      swap(s, start_index, i); // Backtrack
    }
  }
}

solve([...s], 0, ans);

console.log("ans-->>", ans);
