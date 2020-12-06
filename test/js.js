// const list = {val:1, next:{val:2, next:{val:3, next:{val:4,next:{val:5, next:null}}}}}

// function reverse(list){

//     let current = list;
//     // let n = current.next;
//     // let rest = current.next
//     const n = list;
//     while(current.next){
//         let next = current.next;
//         current.next = next.next;
//         next.next = current;
//         current = next;
//         current=current.next
//     }
//     return list;
// }

// console.log(reverse(list));



// const a = {val:1, next:{val:2, next:{val:3, next:null}}};
// const b = {val:3, next:{val:4, next:{val:5, next:{val:50, next:{val:100, next:null}}}}};

// function mergeTwoLists(a, b){
//     const result = {val:null, next:null}
//     const curr = result;

//     while (a && b) {
//         if(a.val < b.val){
//             curr.next = a;
//             a = a.next;
//         } else {
//             curr.next = b;
//             b = b.next;
//         }
//         curr = curr.next;
//     }
//     curr.next = a || b;
//     return result.next;
// }
//console.log(sortll(a, b));