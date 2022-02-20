export interface treeNode{
    value:string,
    child:treeNode[]
}

function createTree(val:string):treeNode{
    return{
        value:val,
        child:[]
    }
}

const node1 = createTree('1')
const node2 = createTree('2')
const node3 = createTree('3')
const node4 = createTree('4')
const node5 = createTree('5')
const node6 = createTree('6')

node1.child.push(node3)
node1.child.push(node2)
node1.child.push(node6)
node2.child.push(node4)
node2.child.push(node5)

function deepSearch(node:treeNode,target:string):boolean{
    if(node == null) return false
    if(node.value == target) return true
    let result = false
    for(let i = 0; i < node.child.length;i++){
        result ||= deepSearch(node.child[i],target)
    }
    return result
}

console.log(deepSearch(node1,'2'))
export{node1}