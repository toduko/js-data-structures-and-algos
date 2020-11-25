const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const selectionSort = arr => {
    let len = arr.length;
    for (let i = 0; i < len; ++i) {
        let min = i;
        for (let j = i; j < len; ++j) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
};

console.log(selectionSort([3, 2, 1])); // [1, 2, 3]
console.log(selectionSort([-23, 25, 1, 16, -10, 10, 3, 22])); // [-23, -10, 1, 3, 10, 16, 22, 25]
