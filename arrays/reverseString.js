function arrayReverse(str) {
    let backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function foorLoopReverse(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function builtInFunctionReverse(str) {
    let newString = str.split('').reverse().join('');
    return newString;
}

function recursiveReverse(str) {
    if (str === '') {
        return '';
    } else {
        return recursiveReverse(str.substr(1)) + str.charAt(0);
    }
}

function ternaryRecursiveReverse(str) {
    return (str === '') ? '' : ternaryRecursiveReverse(str.substr(1)) + str.charAt(0);
}

console.log(foorLoopReverse('Hello, this is using empty array'));
console.log(foorLoopReverse('Hello, this is for loop reverse'));
console.log(builtInFunctionReverse('Hello, this is build in js functions reverse'));
console.log(recursiveReverse('Hello, this is recursion reverse'));
console.log(ternaryRecursiveReverse('Hello, this is ternary recursive reverse'));