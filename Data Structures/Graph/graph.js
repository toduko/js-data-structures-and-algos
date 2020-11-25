class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        if (!this.adjacencyList[vertex1].includes(vertex2))
            this.adjacencyList[vertex1].push(vertex2);
        if (!this.adjacencyList[vertex2].includes(vertex1))
            this.adjacencyList[vertex2].push(vertex1);
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

    dfs(vertex) {
        let traversedNodes = [];
        const traverse = vertex => {
            if (!this.adjacencyList[vertex]) return;
            traversedNodes.push(vertex);
            this.adjacencyList[vertex].forEach(node => {
                if (!traversedNodes.includes(node)) traverse(node);
            });
        };
        traverse(vertex);
        return traversedNodes;
    }

    bfs(vertex) {
        let toVisit = [],
            traversedNodes = [],
            visited = {};
        if (!this.adjacencyList[vertex]) return;
        toVisit.push(vertex);
        visited[vertex] = true;
        while (toVisit.length > 0) {
            let curr = toVisit.shift();
            traversedNodes.push(curr);
            this.adjacencyList[curr].forEach(node => {
                if (!visited[node]) {
                    toVisit.push(node);
                    visited[node] = true;
                }
            });
        }
        return traversedNodes;
    }
}

let g = new Graph();

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.adjacencyList);
console.log(g.bfs('A'));
