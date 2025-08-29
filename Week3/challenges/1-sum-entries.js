/**
 In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

 Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
const value = 2020

let result;
list.reduce(
    (acc, item) => {
        const difference = value - item

        if (acc.has(difference)) {
            result = item * difference
        }
        acc.add(item)
        return acc
}, new Set())
console.log(result);

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);