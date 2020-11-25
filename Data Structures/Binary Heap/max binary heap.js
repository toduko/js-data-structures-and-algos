class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(data) {
        this.values.push(data);

        const swap = (arr, a, b) => {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        };

        if (this.values.length > 1) {
            // bubble up
            let idx = this.values.length - 1,
                parentIdx = Math.floor((idx - 1) / 2);
            while (this.values[idx] > this.values[parentIdx]) {
                swap(this.values, idx, parentIdx);
                idx = parentIdx;
                parentIdx = Math.floor((idx - 1) / 2);
            }
        }
    }

    extractMax() {
        const swap = (arr, a, b) => {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        };
        const length = this.values.length;
        swap(this.values, 0, length - 1);
        let extracted = this.values.pop();
        let parentIndex = 0;
        let leftIndex = 1;
        let rightIndex = 2;
        while (leftIndex < length || rightIndex < length) {
            if (
                this.values[leftIndex] > this.values[parentIndex] ||
                this.values[rightIndex] > this.values[parentIndex]
            ) {
                if (this.values[leftIndex] > this.values[rightIndex]) {
                    swap(this.values, leftIndex, parentIndex);
                    parentIndex = leftIndex;
                } else {
                    swap(this.values, rightIndex, parentIndex);
                    parentIndex = rightIndex;
                }
                leftIndex = 2 * parentIndex + 1;
                rightIndex = 2 + parentIndex + 2;
            } else break;
        }
        return extracted;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
