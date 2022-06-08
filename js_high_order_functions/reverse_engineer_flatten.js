function flatten(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const temp = flatten(item);
            temp.map(val => {
                result.push(val);
            })
            // result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

console.log(flatten([1, 2, [3, [4, 5]]])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten(['a', ['b', ['c']]])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([[2, 3], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]