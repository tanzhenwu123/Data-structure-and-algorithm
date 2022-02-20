import { node1, treeNode } from "./DepthFirstSearchElementOfTree";

function spanSearch(node:treeNode[],target:string):boolean{
    if(node.length == 0) return false
    let child:treeNode[] = []
    for(let i = 0 ; i < node.length; i++){
        if(node[i].value == target) return true
        else child = child.concat(node[i].child)
    }
    return spanSearch(child,target)
}

console.log(spanSearch([node1],'5'))