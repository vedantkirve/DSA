const s = "aabaabaa";
const anagram = "aaba";

// Create frequency map of the anagram
const h = {};
for (const ch of anagram) {
    h[ch] = (h[ch] || 0) + 1;
}

// Function to check if two frequency maps are equal
function checker(counter_hash, h) {
    const h_keys = Object.keys(h);
    for (const key of h_keys) {
        if ((counter_hash[key] || 0) !== h[key]) {
            return false;
        }
    }
    return true;
}

let i = 0;
const k = anagram.length;
const counter_hash = {};
const over_all_counter_index = [];

// Sliding window approach
for (let j = 0; j < s.length; j++) {
    counter_hash[s[j]] = (counter_hash[s[j]] || 0) + 1;

    if ((j - i + 1) === k) {  // When window size matches anagram length
        if (checker(counter_hash, h)) {
            over_all_counter_index.push(i); // Store valid start index
        }
        
        // Remove the leftmost element to slide the window
        counter_hash[s[i]] -= 1;
        if (counter_hash[s[i]] === 0) {
            delete counter_hash[s[i]]; // Remove key if count is 0
        }
        i++; // Move window forward
    }
}

console.log("over_all_counter_index-->>", over_all_counter_index);
