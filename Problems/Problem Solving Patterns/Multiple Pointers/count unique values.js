const countUniqueValues = arr => {
    arr.sort();
    if (arr.length < 2) return arr.length;
    let pointer = 0,
        counter = 1;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[pointer] != arr[i]) {
            pointer = i;
            ++counter;
        }
    }
    return counter;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
