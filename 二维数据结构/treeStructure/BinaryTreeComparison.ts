import { createNode, nodeRule } from "./EachDoubleTree";

const a1 = createNode("a")
const b1 = createNode("b")
const c1 = createNode("c")
const d1 = createNode("d")
const e1 = createNode("e")
const f1 = createNode("f")
const g1 = createNode("g")
a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.left = f1
c1.right = g1

const a2 = createNode("a")
const b2 = createNode("b")
const c2 = createNode("c")
const d2 = createNode("d")
const e2 = createNode("e")
const f2 = createNode("f")
const g2 = createNode("g")
a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.left = f2
c2.right = g2

function compareTree(node1:nodeRule,node2:nodeRule):boolean{
    if(node1 == node2) return true
    if(node1 == null && node2 != null || node1 != null && node2 == null) return false
    if(node1.value != node2.value) return false
    let leftboolean = compareTree((node1.left) as nodeRule,(node2.left) as nodeRule)
    let rightboolean = compareTree((node1.right) as nodeRule,(node2.right) as nodeRule)
    return leftboolean && rightboolean
}

// console.log(compareTree(a1,a2))

export {a1,b1,c1,d1,e1,f1,g1,a2,b2,c2,d2,e2,f2,g2}