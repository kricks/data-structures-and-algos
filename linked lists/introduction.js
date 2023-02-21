const basket = ['apples', 'grapes', 'pears'];

// linked list: apples -> grapes -> pears -> null

const obj1 = {a: true};
// obj2 created a reference to obj1. 
// obj1 and obj2 points to the same location in memory
const obj2 = obj1;

// if i change obj1
obj1.a = 'hello';

// obj1 and obj2 now console.logs hello because obj2 references obj1