const sameFrequency = (num1, num2) => {
    let count1 = {},
        count2 = {};
    while (num1 > 0) {
        count1[num1 % 10] = ++count1[num1 % 10] || 1;
        num1 = Math.floor(num1 / 10);
    }
    while (num2 > 0) {
        count2[num2 % 10] = ++count2[num2 % 10] || 1;
        num2 = Math.floor(num2 / 10);
    }
    for (let prop in count1) {
        if (!(prop in count2)) return false;
        if (count1[prop] != count2[prop]) return false;
    }
    return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
