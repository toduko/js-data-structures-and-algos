const findLongestSubstring = str => {
    let start = 0,
        longest = 0,
        seen = {};
    for (let i = 0; i < str.length; ++i) {
        if (seen[str[i]]) start = Math.max(start, seen[str[i]]);
        longest = Math.max(longest, i - start + 1);
        seen[str[i]] = i + 1;
    }
    return longest;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool'));// 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6