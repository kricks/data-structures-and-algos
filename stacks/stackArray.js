class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    push(value) {
        this.data.push(value);
        return this;
    }

    pop() {
        if (!this.isEmpty()) {
            this.data.pop();
        }
        return this;
    }

    isEmpty() {
        return this.length <= 0;
    }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
stack.push('Youtube');
console.log('peek', stack.peek());
stack.pop();
// stack.pop();
// stack.pop();
console.log(stack);