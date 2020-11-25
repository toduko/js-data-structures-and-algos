const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = arr => {
    let max = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (digitCount(arr[i]) > max) max = digitCount(arr[i]);
    }
    return max;
};

const radixSort = arr => {
    let max = mostDigits(arr);
    for (let i = 0; i < max; ++i) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; ++j) {
            buckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
};

console.log(radixSort([4, 2, 1])); // [1, 2, 4]
console.log(radixSort([23, 25, 1, 16, 10, 10, 3, 22])); // [1, 3, 10, 10, 16, 22, 23, 25]
console.log(radixSort([458, 818, 154, 335, 650, 817, 470, 204, 796, 719])); // [154, 204, 335, 458, 470, 650, 719, 796, 817, 818]
