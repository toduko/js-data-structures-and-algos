const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null;
    let sum = 0;
    for (let i = 0; i < num; ++i) {
        sum += arr[i];
    }
    let tempSum = sum;
    for (let i = num; i < arr.length; ++i) {
        tempSum += arr[i] - arr[i - num];
        sum = Math.max(sum, tempSum);
    }
    return sum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
