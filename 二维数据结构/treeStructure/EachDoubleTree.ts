interface nodeRule{
    vaule:string,
    childNode:nodeRule[]
}

function createNode(val:string):nodeRule{
    return{
        vaule:val,
        childNode:[]
    }
}

const a = createNode("a")
const b = createNode("b")
const c = createNode("c")
const d = createNode("d")
const e = createNode("e")
const f = createNode("f")
const g = createNode("g")

a.childNode.push(b)
a.childNode.push(c)
b.childNode.push(d)
b.childNode.push(e)
c.childNode.push(f)
c.childNode.push(g)
