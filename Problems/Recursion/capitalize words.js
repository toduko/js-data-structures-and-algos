const capitalizeWords = arr => {
    if (arr.length === 0) return [];
    let newArr = [arr.shift().toUpperCase()];
    newArr = newArr.concat(capitalizeWords(arr));
    return newArr;
};

console.log(capitalizeWords(['hey', 'my', 'dude'])); // HEY MY DUDE
console.log(capitalizeWords(['sup', 'ma', 'man'])); // SUP MA MAN
