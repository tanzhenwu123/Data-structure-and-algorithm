// 实现栈结构
class Stack{
    private arr:any[] = []
    push(val:any){
        this.arr.push(val)
    }
    pop(){
        this.arr.pop()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack)

// 实现队列
class Queue{
    private arr:any[] = []
    push(val:any){
        this.arr.push(val)
    }
    pop(){
        this.arr.shift()
    }
}
const queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.pop()
console.log(queue)