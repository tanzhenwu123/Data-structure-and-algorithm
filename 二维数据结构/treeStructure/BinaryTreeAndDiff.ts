// 新增了什么 修改了什么 删除了什么

import { nodeRule } from "./EachDoubleTree";

interface diffRule{
    type:string,
    origin:nodeRule|null,
    now:nodeRule|null
}

function diffTree(node1:nodeRule,node2:nodeRule,diffList:diffRule[]){
    if(node1 == node2) return diffList
    if(node1 == null && node2 != null) diffList.push({type:"新增",origin:null,now:node2})
    if(node1 != null && node2 == null) diffList.push({type:'删除',origin:node1,now:node2})
    else if(node1.value != node2.value){
        diffList.push({
            type:'修改',
            origin:node1,
            now:node2
        })
        diffTree((node1.left) as nodeRule,(node2.left) as nodeRule,diffList);
        diffTree((node1.right) as nodeRule,(node2.right) as nodeRule,diffList);
    }
    diffTree((node1.left) as nodeRule,(node2.left) as nodeRule,diffList);
    diffTree((node1.right) as nodeRule,(node2.right) as nodeRule,diffList);
}