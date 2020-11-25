const validAnagram = (str1, str2) => {
    if (str1.length != str2.length) return false;
    let counter1 = {};
    let counter2 = {};
    for (let i = 0; i < str1.length; ++i) {
        counter1[str1[i]] = ++counter1[str1[i]] || 1;
    }
    for (let i = 0; i < str2.length; ++i) {
        counter2[str2[i]] = ++counter2[str2[i]] || 1;
    }
    for (let char in counter1) {
        if (!(char in counter2)) return false;
        if (counter1[char] !== counter2[char]) return false;
    }
    return true;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
