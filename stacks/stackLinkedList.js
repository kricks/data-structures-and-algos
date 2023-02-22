class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // allows to see the very top element
    peek() {
        return this.top;
    }

    // removes from the top of the stack
    pop() {
        if (this.isEmtpy()) {
            return null;
        }
        // if there is only one node left, we want bottom set to null
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    // add node to the top of stack
    push(value) {
        const newNode = new Node(value);
        if (this.isEmtpy()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdPointer = this.top;
            this.top = newNode;
            this.top.next = holdPointer;
        }
        this.length++;
        return this;
    }

    isEmtpy() {
        return this.length <= 0;
    }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
stack.push('Youtube');
console.log('peek ', stack.peek());
stack.pop();
console.log(stack);
