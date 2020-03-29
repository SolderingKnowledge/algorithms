class Node {
    constructor(val){
        this.next = null;
        this.value = val;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;//new SinglyLinkedList.tail.next = newNode;
            this.tail = newNode;//new SinglyLinkedList.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;//current.next.next.next;
        }
        this.tail = newTail;//prev node
        this.tail.next = null;//removing node
        this.length--;
        if(this.length === 0){// edge case if there no node left
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var ssl = new SinglyLinkedList();
