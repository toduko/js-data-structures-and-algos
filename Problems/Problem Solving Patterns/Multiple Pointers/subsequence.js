const isSubsequence = (str1, str2) => {
    let idx = 0;
    for (let i = 0; i < str2.length; ++i) {
        if (str1[idx] == str2[i]) ++idx;
    }
    if (idx == str1.length) return true;
    return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
