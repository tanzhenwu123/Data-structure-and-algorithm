let arr:number[] = [4,1,6,9,3,2,8,7]

function compare(a:number,b:number):boolean{
    return b < a
}

function exchange(arr:number[],a:number,b:number){
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function bobSort(arr:number[]){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr.length - 1 - i; j++){
            if(compare(arr[j],arr[j+1])) exchange(arr,j,j+1)
        }
    }
}

bobSort(arr)
console.log(arr)