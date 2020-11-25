class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        if (!this.adjacencyList[vertex1].includes(vertex2))
            this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
        if (!this.adjacencyList[vertex2].includes(vertex1))
            this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                item => item !== vertex2
            );
        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                item => item !== vertex1
            );
    }

    dijkstra(start, end) {
        const toVisit = new PriorityQueue();
        let distances = {},
            previous = {},
            path = [];
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                toVisit.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                toVisit.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (toVisit.values.length > 0) {
            let curr = toVisit.dequeue().val;
            if (curr === end) {
                while (previous[curr]) {
                    path.push(curr);
                    curr = previous[curr];
                }
                path.push(start);
                break;
            }
            if (curr || distances[curr] !== Infinity) {
                for (let vertex in this.adjacencyList[curr]) {
                    let nextNode = this.adjacencyList[curr][vertex],
                        candidate = distances[curr] + nextNode.weight,
                        nextNeighbour = nextNode.node;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = curr;
                        toVisit.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}

let g = new Graph();

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.dijkstra('A', 'E'));
