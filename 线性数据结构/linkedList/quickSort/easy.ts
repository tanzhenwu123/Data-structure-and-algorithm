const _arr_:number[] = [4,1,6,9,3,2,8,7]

function easyQuickSort(arr:number[]):number[]{
    if(arr.length == 0) return arr
    let leader = arr[0],
    left:number[] = [],
    right:number[] = []
    for(let i = 1 ; i < arr.length; i++){
        if(arr[i] < leader) left.push(arr[i]);
        else right.push(arr[i])
    }
    left = easyQuickSort(left)
    right = easyQuickSort(right)
    left.push(leader)
    return left.concat(right)
}

// console.log(easyQuickSort(_arr_))