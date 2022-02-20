// 0 1 1 2 3 5 8 13 21 34
// 给出第n位，问第n位的值是多少

function Fibonacci(n:number):number{
    if(n <= 0) return -1
    if(n == 1) return 0
    if(n == 2) return 1
    let a = 0,
    b = 1,
    c = 0;
    for(let i = 3 ; i <= n ; i++){
        c = a + b;
        a = b;
        b = c
    }
    return c
}

function _Fibonacci(n:number):number{
    if(n <= 0) return -1
    if(n == 1) return 0
    if(n == 2) return 1
    return _Fibonacci(n-1) + _Fibonacci(n-2)
}

console.log(Fibonacci(5))
console.log(_Fibonacci(7))