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

  //* O(1)
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

  //* O(n)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("index is not valid");
      return;
    }
    if (index === 0) this.prepend(value);
    else if (index === this.size) this.append(value);
    else if (index > 0 && index < this.size) {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next; // connecting node to existing list ;
      prev.next = node; // connecting prev node to new node ;
      this.size++;
    }
  }

  removeNodeByIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("index is not valid");
      return;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeNodeByValue(value) {
    let prev = this.head;

    // removing the head node ;
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    // removing any other node ;
    else {
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      console.log("value does'nt exist in linked list");
      return null;
    }
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
// * append : adding a new node at the last of the linked list ;
// * insert : adding a new node at a given index ;
// * head pointer should always point to first node in the list ;
//* curr pointer is a pointer that is pointing the current element ;
// now we create a new instance of linked list class ;
const list = new LinkedList();

console.log("list is empty ? ", list.isEmpty()); // list is empty ?  true
console.log("list size ? ", list.getSize()); // list size ?  0
list.prepend(40);
list.prepend(30);
list.prepend(20);
list.prepend(10);
list.prepend(0);
list.append(60);
list.insert(50, 5);
// console.log(list.removeNodeByIndex(4));
console.log(list.removeNodeByValue(0));
console.log(list.removeNodeByValue(20));
list.print();
console.log(list.getSize());
