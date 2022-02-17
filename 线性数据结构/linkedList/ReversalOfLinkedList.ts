import {createNode,nodeRule,linkEach} from './traversalOfLinearDataStructures'

const a = createNode(1)
const b = createNode(2)
const c = createNode(3)
const d = createNode(4)
const e = createNode(5)

a.next = b
b.next = c
c.next = d
d.next = e
// 递归从开始就得找出口
// function reverLinkedList(n:nodeRule):nodeRule{
//     // 如果逆置函数执行到链表的倒数第二个节点的话
//     if(((n.next) as nodeRule).next == null){
//         // 将链表的最后一个节点的指向设置为倒数第二个
//         ((n.next) as nodeRule).next = n;
//         // 返回最后一个节点
//         return (n.next) as nodeRule
//     }else{
//         // 递归开始
//         // 如果不是倒数第一个，而是从第一个或者其他的节点开始的话,将第一个的指向对象传递进逆置函数
//         const result = reverLinkedList((n.next) as nodeRule);
//         // 如果是第一个节点开始逆置，那么第二个节点的指向改为第一个节点
//         ((n.next) as nodeRule).next = n
//         // 第一个节点的指向改为空
//         n.next = null
//         // 继续递归
//         return result
//     }
// }

// const newNode = reverLinkedList(a)
// linkEach(newNode)