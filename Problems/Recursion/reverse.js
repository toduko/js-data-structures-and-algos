const reverse = str => {
    if (str.length === 1) return str[0];
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse('abc')); // cba
console.log(reverse('xyz')); // zyx
console.log(reverse('racecar')); // racecar xD