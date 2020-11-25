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
}

let g = new Graph();

g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('B', 'C', 7);

console.log(g.adjacencyList);
