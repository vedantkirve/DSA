class Heap<T> {
    data: T[] = [];
    comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean) {
        this.comparator = comparator;
    }

    push(value: T) {
        this.data.push(value);
        this.bubbleUp();
    }

    private bubbleUp(): void {
        let idx = this.data.length - 1;
        const val = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentVal = this.data[parentIdx];

            if (this.comparator(val, parentVal)) {
                this.data[idx] = parentVal;
                this.data[parentIdx] = val;
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    pop(): T | undefined {
        if (this.data.length === 0) return undefined;

        const top = this.data[0];
        const last = this.data.pop();

        if (this.data.length > 0 && last !== undefined) {
            this.data[0] = last;
            this.bubbleDown();
        }

        return top;
    }

    private bubbleDown(): void {
        let idx = 0;
        const length = this.data.length;

        while (idx < length) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let swapIdx = idx;

            if (leftIdx < length && this.comparator(this.data[leftIdx], this.data[swapIdx])) {
                swapIdx = leftIdx;
            }

            if (rightIdx < length && this.comparator(this.data[rightIdx], this.data[swapIdx])) {
                swapIdx = rightIdx;
            }

            if (swapIdx === idx) break;

            [this.data[idx], this.data[swapIdx]] = [this.data[swapIdx], this.data[idx]];
            idx = swapIdx;
        }
    }

    peek(): T | undefined {
        return this.data[0];
    }

    size(): number {
        return this.data.length;
    }
}


const minHeap = new Heap<number>((a, b) => a < b);

minHeap.push(20);
minHeap.push(15);
minHeap.push(30);
minHeap.push(10);
console.log('After pushes:', minHeap.data);  // [10, 15, 30, 20]

const popped = minHeap.pop();
console.log('Popped:', popped);               // 10
console.log('After pop:', minHeap.data);     // [15, 20, 30] (heapified)

