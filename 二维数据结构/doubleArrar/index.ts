const arr = new Array(4)

for(let i = 0 ; i < arr.length; i++){
    arr[i] = new Array(i)
}

// console.log(arr)

interface nodeRule{
    value:string,
    lingju:nodeRule[]
}

function createNode(val:string):nodeRule{
    return{
        value:val,
        lingju:[]
    }
}

const a = createNode("a")
const b = createNode("b")
const c = createNode("c")
const d = createNode("d")
const e = createNode("e")

a.lingju.push(b)
a.lingju.push(c)
a.lingju.push(e)

b.lingju.push(a)
b.lingju.push(d)
b.lingju.push(e)

c.lingju.push(a)
c.lingju.push(e)
c.lingju.push(d)