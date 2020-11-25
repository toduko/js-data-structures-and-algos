class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // push to the tail - O(1) time
    push(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        ++this.length;
        return this;
    }

    // pop the tail - O(n) time
    pop() {
        if (!this.head) return undefined;
        let curr = this.head,
            prev = curr;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        this.tail = prev;
        this.tail.next = null;
        --this.length;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }

    // remove the head - O(1) time
    shift() {
        if (this.length === 0) return undefined;
        let curr = this.head;
        this.head = curr.next;
        --this.length;
        if (this.length === 0) this.tail = null;
        return curr;
    }

    // add before the head - O(1) time
    unshift(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        ++this.length;
        return this;
    }

    // get item at index - O(n) time
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let curr = this.head;
        for (let i = 0; i < index; ++i) {
            curr = curr.next;
        }
        return curr;
    }

    // set the value of index - O(n) time
    set(index, data) {
        let found = this.get(index);
        if (found) {
            found.data = data;
            return true;
        }
        return false;
    }

    // insert at index - O(n) time
    insert(index, data) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(data);
        if (index === 0) return !!this.unshift(data);
        let newNode = new Node(data);
        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        ++this.length;
        return true;
    }

    // remove at index - O(n) time
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prev = this.get(index - 1),
            removed = prev.next;
        prev.next = removed.next;
        --this.length;
        return removed.data;
    }

    // reverse - O(n) time
    reverse() {
        let prev = null,
            curr = this.head,
            next = null;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return this;
    }

    // print all the values in order - O(n) time
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
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0);
list.insert(5, 5);
list.print();
list.reverse();
list.print();
