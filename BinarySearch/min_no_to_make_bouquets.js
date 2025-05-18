/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

const bloomDay = [1,10,3,10,2], m = 3, k = 2


function isValid(val, bloomDay, k, m) {
    let k_counter = 0;
    let bouquet_counter = 0;

    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= val) {
            k_counter++;
            if (k_counter === k) {
                bouquet_counter++;
                k_counter = 0;
            }
        } else {
            k_counter = 0;
        }
    }

    return bouquet_counter >= m;
}

const minDays = function (bloomDay, m, k) {
    const totalFlowers = bloomDay.length;
    if (m * k > totalFlowers) return -1; // Not enough flowers to make m bouquets

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    let ans = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isValid(mid, bloomDay, k, m)) {
            ans = mid;
            right = mid - 1; // Try to find a smaller valid day
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

const ans = minDays(bloomDay, m, k);
console.log("ans-->>", ans);
