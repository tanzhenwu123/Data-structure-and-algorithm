import { a, nodeRule } from "./EachDoubleTree";


// 对于二叉树来说，深度优先搜索，和前序遍历都是一样的
function deepSearch(obj:nodeRule,target:string):boolean{
    if(obj == null) return false
    if(obj.value == target) return true
    const left = deepSearch((obj.left) as nodeRule,target)
    const right = deepSearch((obj.right) as nodeRule,target)
    return left || right
}

console.log(deepSearch(a,'g'))