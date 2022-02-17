interface nodeRule{
    value:number,
    next:nodeRule|null
    prev:nodeRule|null
}

function createDoubleLinked(val:number,next?:nodeRule,prev?:nodeRule):nodeRule{
    return {
        value:val,
        next:next as nodeRule,
        prev:prev as nodeRule
    }
}

const node1 = createDoubleLinked(1)
const node2 = createDoubleLinked(2)
const node3 = createDoubleLinked(3)
const node4 = createDoubleLinked(4)
const node5 = createDoubleLinked(5)

node1.next = node2
node2.next = node3
node2.prev = node1
node3.next = node4
node3.prev = node2
node4.next = node5
node4.prev = node3
node5.prev = node4