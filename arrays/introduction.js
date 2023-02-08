console.log('Array Introduction');

// 4 shelves x 4 items = 16 bytes
const strings = ['a', 'b', 'c', 'd'];

//access array, O(1) 
//go to array strings and grab the 3rd item where array is stored in memory
strings[2]

//push, adds to the end of array O(1) operation, no loops
strings.push('e');

//pop, removes last item of array O(1)
strings.pop();

//unshift, add item at beginning of array
// it shifts the rest of the items. 
// it has to loop through everything and reassign indexes 5 operations
// O(n)
strings.unshift('s');

//splice, add item in middle of array 
// O(n/2) -> O(n) it did 3 operations, half of array
strings.splice(2, 0, 'test');