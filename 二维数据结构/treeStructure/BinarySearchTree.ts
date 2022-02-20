export interface searchRule{
    value:number,
    left:searchRule|null,
    right:searchRule|null
}

export function createSearch(val:number):searchRule{
    return{
        value:val,
        left:null,
        right:null
    }
}

const array:number[] = []

for(let i = 0 ; i < 100; i++){
    array[i] = Math.floor(Math.random() * 100)
}

function addNode(root:searchRule,num:number){
    if(root == null || root.value == num) return
    if(root.value > num) {
        if(root.left == null)root.left = createSearch(num);
        else addNode(root.left,num)
    }else{
        if(root.right == null) root.right = createSearch(num);
        else addNode(root.right,num)
    }
}

function BuildSearchTree(arr:number[]){
    if(arr == null || arr.length == 0) return null
    const root = createSearch(arr[0])
    for(let i = 0 ; i < arr.length; i++){
        addNode(root,arr[i])
    }
    return root
}

function search(tree:searchRule,num:number):boolean{
    if(tree == null) return false
    if(tree.value == num) return true
    if(tree.value > num) return search((tree.left)as searchRule,num)
    else return search((tree.right) as searchRule,num)
}

const root = BuildSearchTree(array)

// console.log(search(root as searchRule,23))