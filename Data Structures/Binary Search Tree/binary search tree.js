class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // O(log(n)) time or O(n) time
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            return true;
        }
        return this.insertNode(this.root, newNode);
    }

    insertNode(curr, newNode) {
        if (newNode.data < curr.data) {
            if (curr.left === null) {
                curr.left = newNode;
                return true;
            } else this.insertNode(curr.left, newNode);
        } else if (newNode.data > curr.data) {
            if (curr.right === null) {
                curr.right = newNode;
                return true;
            } else this.insertNode(curr.right, newNode);
        } else return false;
    }

    findMinNode(node) {
        if (node.left === null) return node;
        else return this.findMinNode(node.left);
    }

    // O(log(n)) time or O(n) time
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) return null;
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            let temp = this.findMinNode(node.right);
            node.data = temp.data;

            node.right = this.removeNode(node.right, temp.data);
            return node;
        }
    }

    // O(log(n)) time or O(n) time
    find(data) {
        if (this.root === null) return null;
        if (data === this.root.data) return this.root;
        else if (data < this.root.data)
            return this.findNode(this.root.left, data);
        else return this.findNode(this.root.right, data);
    }

    findNode(curr, data) {
        if (curr === null) return null;
        if (data === curr.data) return curr;
        else if (data < curr.data) return this.findNode(curr.left, data);
        else return this.findNode(curr.right, data);
    }

    bfs() {
        let visited = [],
            toVisit = [];
        toVisit.push(this.root);
        while (toVisit.length !== 0) {
            let curr = toVisit.shift();
            visited.push(curr);
            if (curr.left !== null) toVisit.push(curr.left);
            if (curr.right !== null) toVisit.push(curr.right);
        }
        return visited;
    }

    preorder() {
        let visited = [];
        const traverse = curr => {
            visited.push(curr);
            if (curr.left !== null) traverse(curr.left);
            if (curr.right !== null) traverse(curr.right);
        };
        traverse(this.root);
        return visited;
    }

    postorder() {
        let visited = [];
        const traverse = curr => {
            if (curr.left !== null) traverse(curr.left);
            if (curr.right !== null) traverse(curr.right);
            visited.push(curr);
        };
        traverse(this.root);
        return visited;
    }

    inorder() {
        let visited = [];
        const traverse = curr => {
            if (curr.left !== null) traverse(curr.left);
            visited.push(curr);
            if (curr.right !== null) traverse(curr.right);
        };
        traverse(this.root);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(7);
tree.insert(11);
tree.insert(9);
tree.insert(13);
console.log(tree.inorder());
// console.log(tree.postorder());
// console.log(tree.preorder());
// console.log(tree.bfs());
// console.log(tree);
// tree.remove(10);
// tree.remove(13);
// console.log(tree);
// console.log(tree.find(7));
// console.log(tree.find(11));
// console.log(tree.find(14));
// console.log(tree.root.left);
// console.log(tree.root.right);
/* 
         10 (root)
      /      \
     8       12
   /   \   /    \
  7     9 11    13
*/
