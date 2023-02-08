class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    pop() {
        const lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastElement;
    }

    delete(index) {
        // delete an item and shift all other elements
        const item = this.data[index];
        this.shiftItems(index)
        return item;
    }

    shiftItems(index) {
        // start at index where we want to delete from
        // iterate through it all the way until the end of array
        // each item in the data instead of index before add it to index next to it
        // shifting items to the left by 1
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        // we never touched the last item because of loop condition
        // delete last element in array
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray =  new MyArray();
newArray.push('hi');
newArray.push('test');
newArray.push('!');
newArray.pop();
newArray.push('you');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);