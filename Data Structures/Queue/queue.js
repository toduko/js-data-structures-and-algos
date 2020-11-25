class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    // add to the queue - O(1) time
    enqueue(data) {
        let newNode = new Node(data);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = this.last.next;
        }
        ++this.size;
        return this;
    }

    // remove the first element - O(1) time
    dequeue() {
        if (this.size === 0) return undefined;
        let curr = this.first;
        this.first = curr.next;
        --this.size;
        if (this.size === 0) this.last = null;
        return curr;
    }
}

let q = new Queue();
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
