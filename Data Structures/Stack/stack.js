class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.length = 0;
        this.bottom = null;
        this.top = null;
    }

    // push to the top - O(1) time
    push(data) {
        let newNode = new Node(data);
        if (this.bottom === null) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            this.top.next = newNode;
            this.top = this.top.next;
        }
        ++this.length;
        return this;
    }

    // pop the top node - O(n) time
    pop() {
        if (!this.bottom) return undefined;
        let curr = this.bottom,
            prev = curr;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        this.top = prev;
        this.top.next = null;
        --this.length;
        if (this.length === 0) {
            this.bottom = null;
            this.top = null;
        }
        return curr;
    }

    // return the top node - O(1) time
    peek() {
        return this.top;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack);
