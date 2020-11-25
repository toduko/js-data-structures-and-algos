const someRecursive = (arr, callback) => {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
};

const isOdd = num => num % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([1, 2, 3], val => val > 10)); // false
console.log(someRecursive([1, 20, 3], val => val > 10)); // true
