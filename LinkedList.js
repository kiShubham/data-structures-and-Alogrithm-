class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value); // we have created a node ,with some value ; pointing to null ;

    // if the list is empty ;
    if (this.isEmpty()) {
      this.head = node;
    }
    // when the list is not empty
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty ");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

//* starting m jab koi element nhi h linkedlist m tou head pointer point hoga null pe
//* this.size track the size of linked list ;
// whenever we increase the size , add 1 , and when we decrease size subract 1 from size;
// * prepend :  adding a new node at the starting of the linked list ;
// * head pointer should always point to first node in the list ;

// now we create a new instance of linked list class ;
const list = new LinkedList();

console.log("list is empty ? ", list.isEmpty()); // list is empty ?  true
console.log("list size ? ", list.getSize()); // list size ?  0
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();
