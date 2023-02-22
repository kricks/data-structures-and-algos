class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // get the first item that came into the Queue
    peek() {
        return this.first ? this.first : null;
    }

    // add item to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // remove the first item that came into the queue
    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length <= 0;
    }
}

const queue = new Queue();
queue.enqueue('Jaxx');
queue.enqueue('Chispa');
queue.enqueue('Katie');
queue.enqueue('Stuart');
console.log('peek', queue.peek());
queue.dequeue();
console.log(queue);