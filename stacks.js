/* 
--------------- Stack-------------------------
A stack is a linear data structure, which means that all elements are arranged in sequential order. It results that the push and pop operations can only happen at one end of the structure, in this case, the top of the stack.

Sometimes there can be more than two operations in a stack data structure. Sometimes we might use the isEmpty operation to check if the stack is empty, and the peek operation to return the top element without modifying the stack.

inside js there is no inbuilt stacks and queues ;
therefore we use a class for stacks;

agar stack ke andar kisi bhi property(result object ki) ka  initialize karna h, tou yha hame malum m ki class m hum use karte h ek constructor function ka initialize karne k liye.

 ---------- stacks using array -------------------
*/

/*


class Stacks{
    constructor(){ 
        this.arr = [];
        // arr is a stack ;
    }
    //now making a fn to add value in the (stack) array
    append(value){
        this.arr.push(value);
    }

    // now to find or to know the top element of the (stack)array we will write another fn name Peek();
    //top element =  last element ; latest element added;

    peek(){
        return this.arr[this.arr.length - 1]
    }

    // now to the element from the (stack) array ,another fn to delete last element or top element;

    delete(){
        this.arr.pop();
    }
}

let mystack = new Stacks();
console.log(mystack.arr); // [ ]
mystack.append(5);
console.log(mystack.arr);// [ 5 ] ;

//here array is the stack ;

mystack.append(4)
mystack.append(8)
mystack.append(9)
console.log(mystack.arr);// [ 5, 4, 8, 9 ] ;
console.log(mystack.peek()) // 9 
mystack.delete(); // delete last elem;
console.log(mystack.arr);// [ 5, 4, 8 ] ; 
console.log(mystack.peek()) // 8 

console.log(mystack); // Stacks { arr: [ 5, 4, 8 ] }


*/

//----------- stacks using linked list --------------------

/*
  //to create new node
  class Node {
    constructor(data) {
      this.value = data; //
      this.next = null; 
      //very imp -here null is claryfying that this is a node 
    }
  }

  class Stacks {
    constructor() {
      this.top = null; // node
      this.length = 0;
    }
    //when we had to add new element in the stack using linkedlist we will create new node ;either we can write in this class or we can write in separate class ,make seprate class Node;

    append(value) {
      let myNode = new Node(value);
      //now before appending check elements in linkedlist
      // 1.if linkedlist is empty
      if (this.length == 0) {
        this.top = myNode;
      }
      // 2.linkedlist is not empty;
      else {
        let holdingpointer = this.top; //holdingpointer become null
        this.top = myNode; // this.top become the myNode means the value;
        myNode.next = holdingpointer; // mynode.next means previous value of top become (holdingpointer)i.e, null ;
        //therefore,     null <--- top
      }
      this.length++; //updating the lenth of linked list ;
    }

    display() {
      return this.top;
    }

    // now to the element from the (stack) linked list ,another fn to delete last element or top element;

    // Null <-- 1 <-- 2 <-- 3; so here to delete '3',we have to put the top pointer on '2' and automatically the "3" would become a garbage value ;

    delete() {
      let newTop = this.top.next; // this.top = 3,this.top.next = 2;so now modify value of this.top to 2 ;
      this.top = newTop; //now  this.top = 2

      this.length--; //updating length of linkedlist;
    }
    
      // pop() {
      //   if (!this.top) {
      //     return null;
      //   }
      //   if (this.top === this.bottom) {//for this make this.bottom property inside constructor;
      //     this.bottom = null;
      //   }

      //   const newTop = this.top.next;
      //   this.top = newTop;
      //   this.length--;
      //   return this;
      // }
    
  }


  let mystack = new Stacks();
  //console.log(mystack);// Stacks { top: null, length: 0 }
  mystack.append(1);
  mystack.append(2);
  mystack.append(3);
  console.log(mystack.display());
  
  // Node { value: 3,
  //     next: Node { value: 2, 
  //                     next: Node { value: 1,
  //                                 next: null } 
  //                 }  
  //     }
  // raw => 3 <-- 2 <-- 1 <-- Null;
  // raw => 1 --> 2 --> 3 --> Null;
      
     
  console.log(mystack.length); // 3

  mystack.delete(); //( Null <-- 1 <-- 2 <-- 3 ) to ( Null <-- 1 <-- 2 )
  console.log(mystack.length); // 2
  console.log(mystack.display()); // ( Null <-- 1 <-- 2 )
  
  // Node { value: 2, 
  //         next: Node { value: 1, 
  //                         next: null 
  //                         } 
  //     }  

*/ //----------------------------------------------------------------------------

//------------------------------ questions ------------------------------------------------

//  ! 1. nearest greater element in right ; *************

// let arr = [1, 3, 2, 4];
// ans =  [3, 4, 4,-1]
// let arr = [1, 3, 0, 0, 1, 2, 4];
//ans = [3,4,1,1,2,4,-1];
// let arr= [3,4,4,1];
// console.log(arr.reverse())
// let ans = [] ;
// console.log(!ans[ans.length -1]);

function nextLargerElement(n, arr) {
  let stack = []; //stack.top is stack[stack.length - 1]
  let ans = [];
  for (var i = n - 1; i >= 0; i--) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(arr[i]);
  }
  return ans.reverse();
}

// let arr = [1, 3, 0, 0, 0, 1, 2]; // [3,-1,1,1,1,2,-1]
//ans = [3,4,1,1,2,4,-1];

// console.log(nextLargerElement(arr.length, arr));

// ! 2. nearest greater element to left ;

function nearestGreaterElementOnLeft(n, arr) {
  let ans = [];
  let stack = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return ans;
}

// let arr = [1, 3, 4, 2];
// ans = [-1,-1,-1, 4]
// console.log(nearestGreaterElementOnLeft(arr.length, arr));

// !3. nearest Smaller to Left

// let arr = [1,3,4,2]
// ans = [-1,1,3,1]

function nearestSmallerToLeft(n, arr) {
  let stack = [];
  let ans = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] < arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] >= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) ans.push(-1);
      else if (stack[stack.length - 1] < arr[i])
        ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  return ans;
}

// let arr = [1,3,4,2]
// ans = [-1,1,3,1]
// let arr = [1, 3, 0, 0, 0, 1, 2];
//  ans = [-1, 1, -1, -1, -1, 0, 1];

//console.log(nearestSmallerToLeft( arr.length, arr ))

// ! 4. nearest Smaller to Right

function nearestSmallerToRight(n, arr) {
  let stack = [];
  let ans = [];
  for (var i = n - 1; i >= 0; i--) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] < arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] >= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) ans.push(-1);
      else if (stack[stack.length - 1] < arr[i])
        ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  return ans.reverse();
}

// let arr = [1,3,4,2]
// ans = [-1, 2, 2, -1];
// let arr = [1, 3, 0, 0, 0, 1, 2];
// ans = [0, 0, -1, -1, -1, -1, -1];

// console.log(nearestSmallerToRight(arr.length, arr));

// ! 5. Stock span Problem **********************

// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
// The span of the stock's price in one day is the maximum number of **consecutive days** (starting from ** that day and going backward**) for which the stock price was **less than or equal** to the price of that day.

// let arr = [1, 3, 0, 0, 0, 1, 2] ;
//  ans = [1, 2, 1, 2, 3, 4, 5] ;
// let arr = [100, 80, 60, 70, 60, 75, 85, 110];// (5-1), (6-0)
//     ans = [1, 1,  1,  2,  1,  4,  6, 8];
//                             //  3,  3
// for day 6(75) -> 75(itself),60,70,60

function span(n, arr) {
  let stack = [];
  let ans = [];

  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(1);
    } else if (stack[stack.length - 1] <= arr[i]) {
      let x = 1;
      let count = 1;
      while (stack[stack.length - x] <= arr[i] && stack.length > 0) {
        x++;
        //stack.pop nhi karna pade isiliye x use kar rhe h ;
        count++;
      }
      ans.push(count);
    }
    stack.push(arr[i]);
  }
  return ans;
}

// console.log(span(arr.length, arr));

// using proper stack concept
// use two array separate as idx and stack ;
//isee muhse nhi hua h  linkedlist use karna padega !

function span(n, arr) {
  let stack = [];
  let ans = [];
  let idx = []; //idx is nglIdx;
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      // ans.push(-1);
      idx.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      // ans.push(stack[stack.length - 1])
      idx.push(i - 1);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) idx.push(-1);
      else if (stack[stack.length - 1] > arr[i])
        // ans.push(stack[stack.length - 1])
        idx.push(stack.length - 1);
    }
    stack.push(arr[i]);
  }

  console.log(idx);
  // return ans;
}
// orgIdx =[ 0 , 1,  2,  3,  4,  5,  6,  7 ]
// let arr = [100, 80, 60, 70, 60, 75, 85, 110]; // (5-1), (6-0)
//ansngl =[-1, 100, 80, 80, 70, 80, 100, -1];
//nglIdx=[-1,   0,  1,  1,  3,  1,  0 , -1 ];
// ans = orgIdx - nglIdx;
//         [0, 1, 2 , 3 ,4 ,5 ,6 ,7]
// let arr = [110,45,90,70,66,67,68,44]
// idx =  [ -1, 0, 0, 2, 3, 3, 3,6]

// console.log(span(arr.length, arr));

// soluntion on gfg ;

function span(n, arr) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(i + 1);
    } else if (arr[stack[stack.length - 1]] > arr[i]) {
      let top = stack[stack.length - 1];
      ans.push(i - top);
    }
    stack.push(i);
  }
  return ans;
}
// let arr = [100, 80, 60, 70, 60, 75, 85, 110];
// ans =[ 1,  1,  1,  2,  1,  4,  6,  8 ];

// console.log(span(arr.length, arr));

// ! 6.nearestGreaterElementOnLeft using liked list

function nearestGreaterElementOnLeft(n, arr) {
  let ans = [];
  let stack = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return ans;
}

// ==================================================================================

class Node {
  constructor(data, index) {
    this.first = data; //
    this.second = index;
    this.next = null;
    //very imp -here null is claryfying that this is a node
  }
}

class Stacks {
  constructor() {
    this.top = null; // node
    // this.idx = null;
    this.length = 0;
  }
  append(value) {
    let myNode = new Node(value);
    //now before appending check elements in linkedlist
    // 1.if linkedlist is empty
    if (this.length == 0) {
      this.top = myNode;
      // this.idx =
    } else {
      let holdingpointer = this.top; //holdingpointer become null
      this.top = myNode; // this.top become the myNode means the value;
      myNode.next = holdingpointer; // mynode.next means previous value of top become (holdingpointer)i.e, null ;
      //therefore,     null <--- top
    }
    this.length++; //updating the lenth of linked list ;
  }
  display() {
    return this.top;
  }
  delete() {
    let newTop = this.top.next; // this.top = 3,this.top.next = 2;so now modify value of this.top to 2 ;
    this.top = newTop; //now  this.top = 2
    this.length--; //updating length of linkedlist;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      //for this make this.bottom property inside constructor;
      this.bottom = null;
    }
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
    return this;
  }
}

let mystack = new Stacks();
//console.log(mystack);// Stacks { top: null, length: 0 }
mystack.append(1);
mystack.append(2);
mystack.append(3);
// console.log(mystack.display());
mystack.append(5);

// console.log(mystack.display()); // returnig whole object ;
// console.log(mystack.display().first); // returning the stack.top element;

///////

//! stock span using proper stacks ------------------------

function span(n, arr) {
  let ans = [];
  let stack = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push([arr[i], i]);
  }
}

/////////////////////////////////////////////////////////////////////////////

// ! 7. find the index of nearest Greater Element On Left  ;z

function nearestGreaterElementOnLeft(n, arr) {
  let ans = [];
  let stack = [];
  for (var i = 0; i < n; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack[stack.length - 1][0] > arr[i]) {
      //check value ; at [0]
      ans.push(stack[stack.length - 1][1]); //index chahiye
    } else if (stack[stack.length - 1][0] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack[stack.length - 1][0] > arr[i]) {
        ans.push(stack[stack.length - 1][1]);
      }
    }
    stack.push([arr[i], i]);
  }
  return ans;
}

let arr = [100, 80, 60, 70, 60, 75, 85];
// [-1, 100, 80, 80, 70, 80, 100];
// index[(-1, 0, 1, 1, 3, 1, 0)];
// aswe need ; we get

// console.log(nearestGreaterElementOnLeft(arr.length, arr));

// console.log(arr[0][1]);

//

//branches

/* *
 ! 8.  Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 */
//  s= "()[]{}"
function isBrackets(s) {
  let arr = [];
  let i = 0;

  while (i < s.length) {
    if (arr[arr.length - 1] === "(" && s[i] === ")") arr.pop();
    else if (arr[arr.length - 1] === "{" && s[i] === "}") arr.pop();
    else if (arr[arr.length - 1] === "[" && s[i] === "]") arr.pop();
    else arr.push(s[i]);
    i++;
  }
  if (arr.length > 0) return false;
  return true;
}
// console.log(isBrackets("{(())[]}")); //true;
// console.log(isBrackets("()[]}")); //false;
function longestValideParenthesis(s) {
  if (!s.length) return 0;
  let x = [];

  for (let i = 0; i < s.length; i++) {
    x.push({ element: s[i], index: i });
  }

  console.log(x);
  let arr = [];
  let i = 0;

  while (i < x.length) {
    if (
      arr.length &&
      arr[arr.length - 1].element === "(" &&
      x[i].element === ")"
    )
      arr.pop();
    else if (
      arr.length &&
      arr[arr.length - 1].element === "{" &&
      x[i].element === "}"
    )
      arr.pop();
    else if (
      arr.length &&
      arr[arr.length - 1].element === "[" &&
      x[i].element === "]"
    )
      arr.pop();
    else arr.push(x[i]);
    i++;
  }
  //if stack become empty , means everyone has corrent pair ;
  if (!arr.length) return x.length;

  let max1 = arr[0].index;
  let max2 = x[x.length - 1].index - arr[arr.length - 1].index;
  let max3 = max1 > max2 ? max1 : max2;

  // console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let gap = arr[i].index - arr[i - 1].index - 1;
    max3 = gap > max3 ? gap : max3;
  }
  return max3;
}
// console.log(longestValideParenthesis("()(()(())")); // 6
// console.log(longestValideParenthesis(")()())")); // 4
// console.log(longestValideParenthesis("((()")); // 2
// console.log(longestValideParenthesis("()(()))))")); //6
// console.log(longestValideParenthesis("")); //0
console.log(longestValideParenthesis("()")); //0

//* [ { element: ')', index: 0 }]
//* [ { element: ')', index: 0 }, { element: ')', index: 5 } ]
//* [ { element: ')', index: 0 }, { element: ')', index: 5 },{ element: ')', index: 6 } ... ]
