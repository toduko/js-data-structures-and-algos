const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const partition = (arr, start = 0, end = arr.length - 1) => {
    let storeIndex = start,
        pivotIdx = Math.floor(Math.random() * (end - start + 1) + start),
        pivotValue = arr[pivotIdx];
    swap(arr, pivotIdx, end);
    for (let v = start; v < end; ++v) {
        if (arr[v] < pivotValue) {
            swap(arr, v, storeIndex++);
        }
    }
    swap(arr, end, storeIndex);
    return storeIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let start = left,
        end = right;
    if (left < right) {
        let pivotIdx = partition(arr, left, right);
        quickSort(arr, start, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, end);
        return arr;
    }
};

console.log(quickSort([3, 2, 1]));
console.log(quickSort([-23, 25, 1, 16, -10, 10, 3, 22])); // [-23, -10, 1, 3, 10, 16, 22, 25]
