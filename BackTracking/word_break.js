const s = "catsanddog";
const dict =  ["cats", "cat", "and", "sand", "dog"];

const dict_map = new Set(dict); // Faster lookup using a Set
const ans = [];


function solve(i, s, temp) {
  // Base condition: if `i` reaches the end of the string, store the result
  if (i === s.length) {
    ans.push(temp.join(" ")); // Save partition as a space-separated string
    return;
  }

  let substring = "";
  for (let j = i; j < s.length; j++) {
    substring += s[j]; // Build substring incrementally

    // Check if the substring exists in the dictionary
    if (dict_map.has(substring)) {
      temp.push(substring); // Choose this partition
      solve(j + 1, s, temp); // Explore further
      temp.pop(); // Backtrack
    }
  }
}

solve(0, s, []);
console.log("All possible word breaks:", ans);
