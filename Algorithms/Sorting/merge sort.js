const merge = (arr1, arr2) => {
    let arr = [],
        m = 0,
        k = 0;
    while (m < arr1.length && k < arr2.length) {
        if (arr1[m] < arr2[k]) arr.push(arr1[m++]);
        else arr.push(arr2[k++]);
    }
    while (m < arr1.length) {
        arr.push(arr1[m++]);
    }
    while (k < arr2.length) {
        arr.push(arr2[k++]);
    }
    return arr;
};

const mergeSort = arr => {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.splice(0, mid)), mergeSort(arr));
};

console.log(mergeSort([3, 2, 1])); // [1, 2, 3]
console.log(mergeSort([-23, 25, 1, 16, -10, 10, 3, 22])); // [-23, -10, 1, 3, 10, 16, 22, 25]
