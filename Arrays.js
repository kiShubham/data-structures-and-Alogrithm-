/* 
sriver :
14Q easy , 14 medium , 12 hard ;
easy :
1.Largest Element in an Array
2.Second Largest Element in an Array …
3.Check if the array is sorted
4.Remove duplicates from Sorted array , return the length of new array 
5.Left Rotate an array by one place
6.Left rotate an array by D places
7.Move Zeros to end
8.Linear Search
9. union of two sorted array ;



*/

// * always say "TimeComplexity" and "SpaceComplexity" and the "ExtraSpace" we are using ;

/* 
!1.
 */
let arr = [2, 4, 7, 5, 9, 9, 8];
function largestInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(largestInArray(arr)); // 9

// !2 .second largest  ;

//optimal ; we can use two diff variable to store largest and second largest instead of max array
function secondLargest(arr) {
  let max = [arr[0], arr[1]];
  if (arr[1] > arr[0]) {
    max[0] = arr[1];
    max[1] = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max[0]) {
      max[1] = max[0];
      max[0] = arr[i];
    } else if (arr[i] > max[1] && arr[i] < max[0]) {
      //  arr[i] cant be equal to max[0]
      max[1] = arr[i];
    }
  }
  return "secondlargest :" + max[1];
}

// console.log(secondLargest(arr)); // secondlargest :8
// timecomplexity : O(n)

// or use this

function secondLargestII(arr) {
  let largest = largestInArray(arr); //O(n)
  let sec = -1; // very small neg no. (minInt)
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    if (arr[i] > sec && arr[i] != largest) {
      sec = arr[i];
    }
  }
  return sec;
}

// console.log(secondLargestII(arr)); // 8 , O(n)+O(n) = O(2n) ~= O(N)

//!3..Check if the array is sorted
let sorted = [1, 2, 3, 4, 5, 6];

function checkIfSorted(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
// console.log(checkIfSorted(arr)); //false
// console.log(checkIfSorted(sorted)); // true

//! 4.Remove duplicates from Sorted array, return the length of new array  // rmeber it is sorted ;
// modify the given array
// brute force save the [1,2,3] in set or array then return length ;optimsed approach - use two pointers

let dupArr = [1, 1, 1, 2, 2, 2, 3, 3, 3];

//*vry imprtant

function removeDuplicates(arr) {
  let n = arr.length;
  let i = 0;
  let j = 1;
  while (j < n) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
    j++;
  }
  return arr;
}
// console.log(removeDuplicates(dupArr));

//! 5.Left Rotate an array by one place;
let rotArr = [1, 2, 3, 4, 5]; //o/p -> [2,3,4,5,1];
function rotateByOnePlace(arr) {
  let n = arr.length;
  let r = arr[0];
  let i = 0;
  while (i < n) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr[n - 1] = r;
  return arr;
}
// console.log(rotateByOnePlace(rotArr)); //[ 2, 3, 4, 5, 1 ]
// time comple - O(n) , space=O(n) the array is being used , extraspace = O(1)

/* 
! 6. 6.Left rotate an array by D places

D = D%n , if the d is very large;; n= arr.length 
optimised way : in which sc = O(N)

steps:
1.reverse the element upto k ;
2.reverse the element from k to n-1 ;
3.reverse the whole array ;


*/
// brute force
let rotArr2 = [1, 2, 3, 4, 5, 6, 7];

function RotateByDPlaces(arr, D) {
  let ans = [];
  let n = arr.length;
  if (D == n) return arr;
  D = D % n;
  for (let i = D + 1; i < n; i++) {
    ans.push(arr[i]);
  }
  for (let i = 0; i < D + 1; i++) {
    ans.push(arr[i]);
  }
  return ans;
}
// tc = O(2N) , sc = O(n-1) , also not in inPlace ;
// other brute force is use temp store [ 1,2,3...k ]and shift remaing element in arr and then place temp element in arr ;

// console.log(RotateByDPlaces(rotArr2, 7));

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//todo: optimsed

const reverseArray1 = (arr, start, end) => {
  // O(N)
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

const reverseArrayByme = (arr, startIdx, endInx) => {
  // O(N)
  let n = endInx - startIdx + 1;
  let limit = Math.floor(n / 2);
  let i = startIdx;
  let j = 0;
  while (limit > 0) {
    let temp = arr[i];
    arr[i] = arr[endInx - j];
    arr[endInx - j] = temp;
    j++;
    i++;
    limit--;
  }
  return arr;
};

function rotateArrayByD(arr, D) {
  //sc = O(n) ,extra space is O(1) ,
  if (D === arr.length) return arr;

  D = D % arr.length;

  reverseArray1(arr, 0, D - 1); //[321]
  reverseArray1(arr, D, arr.length - 1); //[987654]
  reverseArray1(arr, 0, arr.length - 1);

  return arr;
}
// console.log(rotateArrayByD(arr1, 3));

//! 7.Move Zeros to end

const zr = [0, 0, 1, 2, 5, 0, 8, 2, 0, 7, 2, 0, 8, 0];
//Brute force ;
function moveZerosBrt(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) temp.push(arr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    if (temp[j]) arr[j] = temp[j];
    else arr[j] = 0; //filling all remainig to zeros
  }
  return arr;
}

// ?now optimised ;

//* important Question  ;
function moveZerosOp(arr) {
  let n = arr.length;
  let i = 0;
  let j = 1;
  while (j < n) {
    if (arr[j] !== 0 && arr[i] === 0) {
      arr[i] = arr[j];
      arr[j] = 0;
      i++;
    }
    if (arr[i] !== 0) i++;
    j++;
  }
  return arr;
}

// console.log(moveZerosOp(zr));

// !9. union of two sorted array ; //merged two sorted array ;
let sarr1 = [1, 1, 2, 3, 4];
let sarr2 = [2, 3, 4, 4, 5, 6];
//op=[1,2,3,4,5,6];

function unionSorted(arr1, arr2) {
  let ans = [];
  let m = arr1.length;
  let n = arr2.length;
  let i = 0;
  j = 0;
  while (i < m && j < n) {
    if (arr1[i] <= arr2[j] || j == n) {
      if (ans.length === 0 || ans[ans.length - 1] != arr1[i]) {
        ans.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] >= arr2[j] || i == m) {
      if (ans.length === 0 || ans[ans.length - 1] != arr2[j]) {
        ans.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < m) {
    if (ans.length === 0 || ans[ans.length - 1] != arr1[i]) {
      ans.push(arr1[i]);
    }
    i++;
  }
  while (j < n) {
    if (ans.length === 0 || ans[ans.length - 1] != arr2[j]) {
      ans.push(arr2[j]);
    }
    j++;
  }
  return ans;
}

console.log(unionSorted(sarr1, sarr2)); // [ 1, 2, 3, 4, 5, 6 ]
