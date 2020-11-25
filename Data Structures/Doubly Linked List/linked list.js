class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1) time
    push(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        ++this.length;
        return this;
    }

    // O(1) time
    pop() {
        if (this.head === null) return undefined;
        let tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        --this.length;
        return this.tail.data;
    }

    // O(1) time
    shift() {
        if (this.length === 0) return undefined;
        let old = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            old.next = null;
        }
        --this.length;
        return old;
    }

    // O(1) time
    unshift(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        ++this.length;
        return this;
    }

    // O(n) time
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let curr = this.head;
        if (index <= Math.floor(this.length / 2)) {
            for (let i = 0; i < index; ++i) {
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for (let i = this.length - 1; i > index; --i) {
                curr = curr.prev;
            }
        }
        return curr;
    }

    // O(n) time
    set(index, data) {
        let found = this.get(index);
        if (found !== null) {
            found.data = data;
            return true;
        }
        return false;
    }

    // O(n) time
    insert(index, data) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(data);
        if (index === this.length) return !!this.push(data);
        let prev = this.get(index - 1),
            next = prev.next,
            newNode = new Node(data);
        prev.next = newNode;
        next.prev = newNode;
        newNode.prev = prev;
        newNode.next = next;
        ++this.length;
        return true;
    }

    // O(n) time
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let found = this.get(index);
        found.prev.next = found.next;
        found.next.prev = found.prev;
        found.next = null;
        found.prev = null;
        --this.length;
        return found;
    }

    // O(n) time
    reverse() {
        let curr = this.head;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        while (curr) {
            let next = curr.next;
            curr.next = curr.prev;
            curr.prev = next;
            curr = next;
        }
        return this;
    }

    // O(n) time
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new LinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(6, 6);
// list.insert(0, -1);
// list.pop();
// list.shift();
// list.unshift(10)
// console.log(list.get(4));
list.print();
list.reverse();
list.print();
