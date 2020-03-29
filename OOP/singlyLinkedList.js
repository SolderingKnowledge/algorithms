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
}

var ssl = new SinglyLinkedList();
