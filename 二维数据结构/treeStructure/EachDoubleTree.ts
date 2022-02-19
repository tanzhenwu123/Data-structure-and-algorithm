export interface nodeRule{
    value:string,
    left:nodeRule|null,
    right:nodeRule|null
}

export function createNode(val:string,l?:nodeRule,r?:nodeRule):nodeRule{
    return{
        value:val,
        left:l as nodeRule,
        right:r as nodeRule
    }
}

const a = createNode("a")
const b = createNode("b")
const c = createNode("c")
const d = createNode("d")
const e = createNode("e")
const f = createNode("f")
const g = createNode("g")

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

// 二叉树的前序遍历
// function EachTree(val:nodeRule){
//     if(val == null) return
//     console.log(val.value)
//     EachTree(val.left)
//     EachTree((val.right) as nodeRule)
// }

// EachTree(a)

// 二叉树的中序遍历
// function EachTree(val:nodeRule){
//     if(val == null) return
//     EachTree((val.left) as nodeRule)
//     console.log(val.value)
//     EachTree((val.right) as nodeRule)
// }

// EachTree(a)

// 二叉树的后序遍历
function EachTree(val:nodeRule){
    if(val == null) return
    EachTree((val.left) as nodeRule)
    EachTree((val.right) as nodeRule)
    console.log(val.value)
}

// EachTree(a)

// 前序结果  a bcd efg
// 中序结果  bcd a efg
// 后序结果  bcd efg a

// 根据前序还原二叉树
// 根节点:a 左子树:b b的左子树:d b的右子树:e  右子树:c c的左子树:e c的右子树:f

// 根据前序中序还原二叉树
const qian = ['a','b','d','e','c','f','g']
const zhong = ['d','b','e','a','f','c','g']
const hou = ['d','e','b','f','g','c','a']

function hyTree(qTree:string[],zTree:string[]):nodeRule{
    if(qTree.length == 0 || zTree.length == 0) return {} as nodeRule
    const root = createNode(qTree[0])
    const index = zTree.indexOf(root.value)
    const qianleft = qTree.slice(1,index+1)
    const qianright = qTree.slice(index+1,qTree.length)
    const zhongleft = zTree.slice(0,index)
    const zhongright = zTree.slice(index+1,zTree.length)
    // console.log(qianleft,qianright,zhongleft,zhongright)
    root.left = hyTree(qianleft,zhongleft)
    root.right = hyTree(qianright,zhongright)
    return root
}

// const tree = hyTree(qian,zhong)
// console.log(tree)

// 根据中序后序还原二叉树
function _hyTree(zTree:string[],hTree:string[]):nodeRule{
    if(zTree.length == 0 || hTree.length == 0) return {} as nodeRule
    const root = createNode(hTree[hTree.length -1])
    const index = zTree.indexOf(root.value)
    const zhongleft = zTree.slice(0,index)
    const zhongright = zTree.slice(index+1,zTree.length)
    const houleft = hTree.slice(0,index)
    const houright = hTree.slice(index,hTree.length-1)
    // console.log(zhongleft,houleft,zhongright,houright)
    root.left = _hyTree(zhongleft,houleft)
    root.right = _hyTree(zhongright,houright)
    return root
}

const _tree = _hyTree(zhong,hou)
// console.log(_tree)

export{a,b,c,d,e,f,g}