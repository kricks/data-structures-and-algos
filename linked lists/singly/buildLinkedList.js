
// 10 -> 5 -> 16

// let myLinkedList = {
//     // head node
//     head: {
//         // needs value
//         value: 10,
//         // next is pointer or reference to next node
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // has to have value, list cannot be empty
    constructor(value) {
        this.head = new Node(value);
        // since we have only one item at the beginning, tail is assigned to head
        this.tail = this.head;
        // gets 1 because we only have 1 element when instantiated;
        this.length = 1;
    }

    append(value) {
        // create new node with value, then attach it to end of list
        const newNode = new Node(value);

        // attach new node after the previous node, 
        // next is null right now so point it to new node
        this.tail.next = newNode;

        // the tail has a new last item, this updates tail to new node
        this.tail = newNode;
        
        this.length++;
        return this;
    }

    // add value to beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        const newNode = new Node(value);
        const prevEle = this.traverseToIndex(index - 1);
        const nextEle = prevEle.next;
        // if index is greater than length, add it to end of list
        if (index >= this.length) {
           this.append(value);
        }
        // if index is 0, add value to beginning of list
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        prevEle.next = newNode;
        newNode.next = nextEle;
        this.length++;
        return this;
    }

    removeAtIndex(index) {
        if (index <= 0) {
            this.removeAtHead();
        }
        else if (index >= this.length) {
            this.removeAtTail();
        }
        else {
            let prevEle = this.traverseToIndex(index - 1);
            const removedNode = prevEle.next;
            prevEle.next = removedNode.next;
            this.length--;
        }
        return this;
    }

    removeAtHead() {
        this.head = this.head.next;
        this.length--;
        return this;
    }

    removeAtTail() {
        let secondToLast = this.traverseToIndex(this.length - 2);
        this.tail = secondToLast;
        this.tail.next = null;
        this.length--;
        return this;
    }
    
    traverseToIndex(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    // prints out list in an array
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(99, 3);
myLinkedList.removeAtIndex(3);
// myLinkedList.removeAtIndex(0);
// myLinkedList.removeAtIndex(200);
console.log(myLinkedList.printList());