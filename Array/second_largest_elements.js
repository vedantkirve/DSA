const nums = [9, 8, 7, 6, 5]
// [8, 8, 7, 6, 5]

// largest / secondlargest
let largest = Number.NEGATIVE_INFINITY;
let second_largest = Number.NEGATIVE_INFINITY;

for (const num of nums) {
    if (num > largest) {
        second_largest = largest;
        largest = num;
    } else if (num < largest && num > second_largest) {
        second_largest = num;
    }
}

if (second_largest === Number.NEGATIVE_INFINITY) {
    console.log("No second largest unique element found. so -1");
} else {
    console.log("Largest:", largest, "Second Largest:", second_largest);
}