interface nodeRule{
    value:number,
    next:object|null
}
function createNode(val:number):nodeRule{
    return{
        value:val,
        next:null
    }
}

const a = createNode(1)
const b = createNode(2)
const c = createNode(3)
const d = createNode(4)
const e = createNode(5)
a.next = b
b.next = c
c.next = d
d.next = e

// 递归链表
function linkEach(val:nodeRule){
    if(val.next == null) return
    console.log(val)
    linkEach((val.next) as nodeRule)
}

linkEach((a.next) as nodeRule)

const arr:number[] = [1,2,3,4,5]

// 递归数组
function eachArr(_arr:number[],index:number){
    if(_arr.length <= index) return
    console.log(_arr[index])
    eachArr(_arr,index+= 1)
}
eachArr(arr,0)