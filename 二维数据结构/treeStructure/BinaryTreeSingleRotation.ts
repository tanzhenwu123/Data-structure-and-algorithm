import { createSearch, searchRule } from "./BinarySearchTree";

const a = createSearch(6)
const b = createSearch(3)
const c = createSearch(2)
const d = createSearch(5)

a.left = b
b.left = c
b.right = d

function getDeep(node:searchRule):number{
    if(node == null) return 0
    const left = getDeep((node.left) as searchRule);
    const right = getDeep((node.right) as searchRule)
    return Math.max(left,right) + 1
}

function isBalance(node:searchRule):boolean{
    if(node == null) return true
    const left = getDeep((node.left) as searchRule)
    const right = getDeep((node.right) as searchRule)
    if(Math.abs(left - right) > 1) return false
    else return isBalance((node.left) as searchRule) && isBalance((node.right) as searchRule)
}

function leftRotate(node:searchRule):searchRule{
    // 找新根
    const newRoot = node.right
    // 找到变化分支
    const cNode = ((node.right) as searchRule).left;
    // 当前旋转节点的右子树为变化分支
    node.right = cNode as searchRule
    // 新根的左子树为旋转节点
    (newRoot as searchRule).left = node
    // 返回新的根节点
    return newRoot as searchRule
}

function rightRotate(node:searchRule):searchRule{
    const newRoot = node.left
    const cNode = ((node.left) as searchRule).right
    node.left = cNode as searchRule
    (newRoot as searchRule).right = node
    return newRoot as searchRule
}

function change(node:searchRule):searchRule{
    if(isBalance(node)) return node
    if(node.left != null) change((node.left) as searchRule)
    if(node.right != null) change((node.right) as searchRule)
    const leftDeep = getDeep((node.left) as searchRule)
    const rightDeep = getDeep((node.right) as searchRule)
    if(Math.abs(leftDeep - rightDeep) < 2) return node
    else if(leftDeep >  rightDeep) rightRotate(node)
    else leftRotate(node)
    return node
}

console.log(isBalance(a))
const newRoot = change(a)
console.log(isBalance(newRoot))