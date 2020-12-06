const a = {val:1, next:{val:2, next:{val:3, next:null}}};
const b = {val:3, next:{val:4, next:{val:5, next:{val:50, next:{val:100, next:null}}}}};

function merge2Lists(a, b){
    const result = {val:null, next:null}
    const curr = result;

    while (a && b) {
        if(a.val < b.val){
            curr.next = a;
            a = a.next;
        } else {
            curr.next = b;
            b = b.next;
        }
        curr = curr.next;
    }
    curr.next = a || b;
    return result.next;
}
console.log(merge2Lists(a, b));