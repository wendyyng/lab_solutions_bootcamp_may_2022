const reduce = function (arr, callback, initial) {
    let result = initial;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result = callback(result, element)
    }
    console.log(result)
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

reduce(numbers, plus, 0)