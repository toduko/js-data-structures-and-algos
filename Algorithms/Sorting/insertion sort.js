const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const insertionSort = arr => {
    let len = arr.length;
    for (let i = 1; i < len; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
            else break;
        }
    }
    return arr;
};

console.log(insertionSort([3, 2, 1])); // [1, 2, 3]
console.log(insertionSort([-23, 25, 1, 16, -10, 10, 3, 22])); // [-23, -10, 1, 3, 10, 16, 22, 25]
