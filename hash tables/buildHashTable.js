class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // adds to this.data
    // set grapes as first index in array
    // number of grapes as second index in array
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        // console.log('set', this.data);
        return this.data;
    }

    // retrieves from this.data
    // retrieves grapes and returns 10,000
    get(key) {
        let address = this._hash(key);
        const current = this.data[address];
        if (current) {
            for (let i = 0; i < current.length; i++) {
                if (current[i][0] === key) {
                    return current[i][1];
                }
            }
        }
        return undefined;
    }

    // loop through hash table, returns grapes, apples, oranges
    keys() {
        const keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArr.push(this.data[i][0][0]);
            }
        }
        return keysArr;
    }

    keysWithoutCollision() {
        if (!this.data.length) {
            return undefined;
        }
        let result = [];
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0]);
                    }
                } else {
                    result.push(this.data[i][0]);
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 1000));
console.log(myHashTable.set("apple", 54));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
