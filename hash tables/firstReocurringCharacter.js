// Google Question
// given ana rray = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// it should return 2

//given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// it should return 1

// given an array = [2, 3, 4, 5];
// it should return undefined

// O(n)
function findFirst(array) {
    let myMap = new Map();
    // loop through array
    for(let i = 0; i < array.length; i++) {
        // check to see if it exists
        if (!myMap.has(array[i])) {
            myMap.set(array[i]);
        } else {
            // return the element in array
            return array[i];
        }
    }
    return undefined;
}

console.log('problem 1)', findFirst([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log('problem 2)', findFirst([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log('problem 3)', findFirst([2, 3, 4, 5]));