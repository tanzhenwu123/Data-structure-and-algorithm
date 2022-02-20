// 变态青蛙跳台阶

// 一次可以跳1级台阶，2级台阶，或者n级台阶
// 问：跳上n级台阶有多少种跳法

function crazyJump(n:number):number{
    if(n <= 0) return -1
    if(n == 1) return 1
    if(n == 2) return 2
    let result = 0;
    for(let i = 1 ; i < n ; i++){
        result += crazyJump(n-i)
    }
    // 0级台阶直接跳过
    return result + 1
}

console.log(crazyJump(4))