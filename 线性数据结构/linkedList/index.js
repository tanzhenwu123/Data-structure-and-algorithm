// const b = {
//     value:2,
//     next:null
// }

// const a = {
//     value:1,
//     // 此处next指向b的地址
//     next:b
// }

// console.log(a.next == b)
function createNode(value){
    this.value= value
    this.next = null
}

const a =new createNode(1)
const b = new createNode(2)
const c = new createNode(3)
const d = new createNode(4)

a.next = b
b.next = c
c.next = d

console.log(`a:${a.value},b:${a.next.value},c:${a.next.next.value},d:${a.next.next.next.value}`)