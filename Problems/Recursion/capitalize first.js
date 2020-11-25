const capitalizeFirst = arr => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    newArr.push(arr[0][0].toUpperCase() + arr[0].substr(1));
    return newArr.concat(capitalizeFirst(arr.splice(1)));
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // Car Taco Banana
console.log(capitalizeFirst(['hit', 'me', 'baby', 'one', 'more', 'time'])); // Hit Me Baby One More Time
