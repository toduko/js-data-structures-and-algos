const isPalindrome = str => {
    if (str.length < 2) return true;
    if (str.slice(0, 1) != str.slice(-1)) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('abc')); // false
console.log(isPalindrome('abba')); // true