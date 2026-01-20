export {}

class MyHeap{
    nums: number[] = [];
    constructor(nums: number[]){
        for(let i = 0 ; i < nums.length ; i++){
            // console.log("NUMS",nums[i],"this.nums",this.nums)
            this.add(nums[i])
        }
    }

    comparator(parent:number, child: number): boolean{
        if(parent > child){
            return true
        }
        return false
    }

    add(num: number){
        console.log("nums-->>",num)
        this.nums.push(num)
        console.log("After add",this.nums)
        this.bubbleUp();
    }

    bubbleUp(): void{
        let idx = this.nums.length-1;
        let val = this.nums[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2)
            let parentVal = this.nums[parentIdx]

            // 2,7
            if(!this.comparator(parentVal, val)){
                this.nums[idx] = parentVal
                this.nums[parentIdx] = val
                idx = parentIdx
            }else{
                break;
            }

        }
    }

    pop(): number{
        const first = this.nums[0];
        const last = this.nums.pop()!;
        if (this.nums.length > 0) {
            this.nums[0] = last;
            this.bubbleDown();
            console.log("after bubbleDown-->>",this.nums)
        }
        return first;
    }

    bubbleDown(): void {
        let idx = 0;
        const length = this.nums.length;

        while (idx < length) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let swapIdx = idx;

            if (leftIdx < length && this.comparator(this.nums[leftIdx], this.nums[swapIdx])) {
                swapIdx = leftIdx;
            }

            if (rightIdx < length && this.comparator(this.nums[rightIdx], this.nums[swapIdx])) {
                swapIdx = rightIdx;
            }

            if (swapIdx === idx) break;

            [this.nums[idx], this.nums[swapIdx]] = [this.nums[swapIdx], this.nums[idx]];
            idx = swapIdx;
        }
    }

}

// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.




// [2,7,4,1,8,1]

function lastStoneWeight(stones: number[]): number {
    const heap = new MyHeap(stones)
    console.log("heap->>",heap.nums)

    while(heap.nums.length > 1){
        const n1: number = heap.pop()
        const n2: number = heap.pop()
        const val: number = n1 - n2
        if(n1 != n2){
            heap.add(val)
        }
    }
   return heap.nums.length === 1 ? heap.nums[0] : 0;
};

const stones =[2,2]
//  stones = [2,7,4,1,8,1] 
// stones = [1]
// 
// 
const ans = lastStoneWeight(stones)
console.log("ans-->>",ans)