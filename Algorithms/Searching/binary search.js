const binarySearch = (arr, num) => {
    if (arr.length === 0) return -1;
    let left = 0,
        right = arr.length - 1,
        mid = Math.floor((left + right) / 2);
    while (left <= right && arr[mid] !== num) {
        if (arr[mid] < num) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }
    return arr[mid] === num ? mid : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
    binarySearch(
        [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            96,
            98,
            99
        ],
        10
    )
); // 2
console.log(
    binarySearch(
        [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            96,
            98,
            99
        ],
        95
    )
); // 16
console.log(
    binarySearch(
        [
            5,
            6,
            10,
            13,
            14,
            18,
            30,
            34,
            35,
            37,
            40,
            44,
            64,
            79,
            84,
            86,
            95,
            96,
            98,
            99
        ],
        100
    )
); // -1
