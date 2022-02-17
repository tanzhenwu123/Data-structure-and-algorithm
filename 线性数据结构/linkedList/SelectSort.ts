import { compare, exchange } from "./BubbleSorting"

const _arr = [4,1,6,9,3,2,8,7]

// 内圈循环，每圈选出一个最大的，排在数组末尾
function selectSort(arr:number[]){
    for(let i = 0 ; i  < arr.length; i++){
        let maxIndex = 0;
        for(let j = 0 ; j < arr.length - i; j++){
            if(compare(arr[maxIndex],arr[j])) maxIndex = j 
        }
        exchange(arr,maxIndex,arr.length - 1 -i)
    }
}