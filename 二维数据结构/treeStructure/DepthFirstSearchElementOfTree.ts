interface treeNode{
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

function deepSearch(node:treeNode){
    if(node == null) return
    console.log(node.value)
    for(let i = 0; i < node.child.length;i++){
        deepSearch(node.child[i])
    }
}

deepSearch(node1)