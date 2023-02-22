
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index >= 0) {
            this.prepend(value);
            return this;
        }
        const newNode = new Node(value);
        let current = this._traverse(index);
        const pre = current.previous;
        const next = pre.next;
        pre.next = newNode;
        newNode.previous = pre;
        newNode.next = next;
        next.previous = newNode;
        this.length++;
        return this;
    }

    removeAtIndex(index) {

    }

    _traverse(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    _reverse() {

    }

    _printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return {list: array, length: array.length};
    }

    _removeAtHead() {

    }

    _removeAtTail() {

    }

}

const list = new DoublyLinkedList(10);
list.append(2);
list.append(5);
list.prepend(7);
list.insert(12, 2);

console.log(list._printList());
// console.log(list);
