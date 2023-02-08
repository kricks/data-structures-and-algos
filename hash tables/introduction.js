// age, name, magic, scream are going to be placed somewhere in memory
let user = {
    age: 54,
    name: 'Bob',
    magic: true,
    scream: function() {
        console.log('AAAG!');
    }
}

// i can access a property really fast
user.age // O(1)

// i can add a new property
user.spell = 'heal!';

// Map
const a = new Map();

// Set
const b = new Set();