import { nodeRule,createNode,a,b,c,d,e,f,g } from "./EachDoubleTree";

const h = createNode("h")
const j = createNode("j")
d.left = h
e.right = j

function getDeep(node:nodeRule):number{
    if(node == null) return 0
    const left = getDeep((node.left) as nodeRule)
    const right = getDeep((node.right) as nodeRule)
    return Math.max(left,right) + 1
}

function balanceTree(node:nodeRule):boolean{
    if(node == null) return true
    const left = getDeep((node.left) as nodeRule)
    const right = getDeep((node.right) as nodeRule)
    if(Math.abs(left-right) > 1) return false
    else return balanceTree((node.left) as nodeRule) && balanceTree((node.right) as nodeRule)
}

console.log(balanceTree(a))