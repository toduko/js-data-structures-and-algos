const collectStrings = obj => {
    let sum = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum = sum.concat(collectStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            sum.push(obj[key]);
        }
    }
    return sum;
};

const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz'
                    }
                }
            }
        }
    }
};

console.log(collectStrings(obj)); // foo bar baz
