import { a, nodeRule } from "./EachDoubleTree";


// 对于二叉树来说，深度优先搜索，和前序遍历都是一样的
function deepSearch(obj:nodeRule,target:string):boolean{
    if(obj == null) return false
    if(obj.value == target) return true
    const left = deepSearch((obj.left) as nodeRule,target)
    const right = deepSearch((obj.right) as nodeRule,target)
    return left || right
}

// console.log(deepSearch(a,'g'))

function spanSearch(obj:nodeRule[],target:string):boolean{
    if(obj.length == 0) return false
    const children:nodeRule[] = []
    for(let i = 0 ; i < obj.length; i++){
        console.log(obj[i].value)
        if(obj[i].value == target) return true
        else{
            children.push((obj[i].left) as nodeRule)
            children.push((obj[i].right) as nodeRule)
        }
    }
    return spanSearch(children,target)
}

console.log(spanSearch([a],'f'))