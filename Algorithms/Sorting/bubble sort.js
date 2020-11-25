const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const bubbleSort = arr => {
    let len = arr.length;
    for (let i = 0; i < len - 1; ++i) {
        for (let j = 0; j < len - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

console.log(bubbleSort([-29, -33, 31, -10, 15, 27, 56])); // [-33, -29, -10, 15, 27, 31, 56]
