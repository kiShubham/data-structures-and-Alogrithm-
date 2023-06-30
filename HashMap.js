// basics of hash Map
// {} -> key-value pair ;
/* 
? methods ==> 
!1. making a map ;
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
or just 
const myMap = new Map();

 ! 2. Map.prototype.size() ;
 const map1 = new Map();

map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');

console.log(map1.size);
// Expected output: 3

!3. Map.prototype.clear()
The clear() method removes all elements from a Map object.
const map1 = new Map();

map1.set('bar', 'baz');
map1.set(1, 'foo');

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);

! 4. Map.prototype.set()
The set() method adds or updates an entry in a Map object with a specified key and a value.
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
Expected output: "foo"

console.log(map1.get('baz'));
Expected output: undefined

! 5. Map.prototype.get()
The get() method returns a specified element from a Map object. 
If the value that is associated to the provided key is an object,
 then you will get a reference to that object and any change made 
 to that object will effectively modify it inside the Map object.

const map1 = new Map();
map1.set('bar', 'foo');


* console.log(map1.get('bar'));
* or just simply console.log( map1["bar"]) // "foo"
// Expected output: "foo"

console.log(map1.get('baz'));
// Expected output: undefined

!6.  Map.prototype.has()
The has() method returns a boolean indicating whether an element with the specified key exists or not.

!7.Map.prototype.delete()
The delete() method removes the specified element from a Map object by key.
const map1 = new Map();
map1.set('bar', 'foo');

*console.log(map1.delete('bar'));
// Expected result: true
// True indicates successful removal

* console.log(map1.has('bar'));
// Expected result: false

!8. Map.prototype.entries()
The entries() method returns a new map iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');
map1.set(2, 'ba');

const iterator1 = map1.entries();

console.log(iterator1.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator1.next().value);
console.log(iterator1.next().value);
// Expected output: Array [1, "bar"]

*/

// hash map converts array into object
// let string = "abcaadsbcf";
// let arr = string.split("");
// console.log(arr); //['a', 'b', 'c', 'a', 'a', 'd', 's', 'b', 'c', 'f' ]

//map => {"a": 3 , 'b':2 , 'c':2 ...} value is number of times ; key is the aplhabet

// let hashmap = new Map();
// hashmap.set("a", 1); //* working ;
// console.log(hashmap);

/* for (let i = 0; i < arr.length; i++) {
  if (hashmap.has(arr[i])) {
    let temp = hashmap.get(arr[i]);
    hashmap.set(arr[i], temp + 1);
  } else hashmap.set(arr[i], 1);
} */
/* 
for (let i = 0; i < arr.length; i++) {
  if (!hashmap[arr[i]]) {
    hashmap[arr[i]] = 1;
  } else hashmap[arr[i]] += 1;
} */
// map[""] inside always a string
// console.log(hashmap);

// const myMap = new Map();
// myMap.set("a", "one");
// myMap.set("b", "bone");
// myMap.set("c", "cone");
// myMap.set(1, "one");
// console.log(myMap.get(1));
// console.log(myMap);

let newString = "Statements are unique.";
function mostFrequent(text) {
  let arr = text.split("");

  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "." || arr[i] === " " || arr[i] === ",") {
    } else if (myMap.has(arr[i])) {
      let temp = myMap.get(arr[i]) + 1;
      myMap.set(arr[i], temp);
    } else if (!myMap.has(arr[i])) {
      myMap.set(arr[i], 1);
    }
  }
  return myMap;
  //   for(let i=0;i<Map.size;i++){

  //   }
}
console.log(mostFrequent(newString));
