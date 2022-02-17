import { exchange } from "../BubbleSorting";
let __arr:number[] = [4,1,6,9,3,2,8,7]

function quickSort(arr:number[],begin:number,end:number){
    if(begin >= end -1) return
    let left = begin,
    right = end;
    do {
        do left++;while(left < right && arr[left] < arr[begin])
        do right--;while(right > left && arr[right] > arr[begin])
        if(left < right) exchange(arr,left,right)
    } while (left < right);
    const exPoint = left == right ? right -1 : right
    exchange(arr,begin,exPoint)
    quickSort(arr,begin,exPoint)
    quickSort(arr,exPoint+1,end)
}

quickSort(__arr,0,__arr.length)
console.log(__arr)
