export interface chartRule{
    value:string,
    next:chartRule[]
}

function createChar(val:string):chartRule{
    return {
        value:val,
        next:[]
    }
}

const node1 = createChar('A')
const node2 = createChar('B')
const node3 = createChar('C')
const node4 = createChar('D')
const node5 = createChar('E')

node1.next.push(node2)
node1.next.push(node3)
node2.next.push(node1)
node2.next.push(node3)
node2.next.push(node4)
node3.next.push(node1)
node3.next.push(node2)
node3.next.push(node4)
node4.next.push(node2)
node4.next.push(node3)
node4.next.push(node5)
node5.next.push(node4)

function deepSearch(node:chartRule,target:string,path:chartRule[]):boolean{
    if(node == null) return false
    if(path.indexOf(node) > -1) return false
    if(node.value == target) return true
    path.push(node)
    console.log(path)
    let result = false
    for(let i = 0 ; i < node.next.length; i++){
        result ||= deepSearch(node.next[i],target,path)
    }
    return result
}

// console.log(deepSearch(node1,'C',[]))

export{node1}