import { node1,chartRule } from "./DepthFirstSearchOfGraphs";

function spanSearch(node:chartRule[],target:string,path:chartRule[]):Boolean{
    if(node.length == 0) return false
    let nextArray :chartRule[] = []
    for(let i = 0 ; i < node.length; i++){
        if(path.indexOf(node[i]) > -1) continue
        path.push(node[i])
        if(node[i].value == target) return true
        else nextArray = nextArray.concat(node[i].next)
    }
    return spanSearch(nextArray,target,path)
}

console.log(spanSearch([node1],'C',[]))