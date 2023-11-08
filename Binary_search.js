// 19Q . total ;

// use better comments extension for ease to read ;

// question m agar "sorted" word ka use kiya gya h ,tou chances are binary search applicable;
// look into read me for theory or visit geekforgeeks ;
// basic question- search index of 2 in array ;

//  mid1 = l + Math.floor((r - l) / 2); vs mid2 = Math.floor((r+l)/2)
// mid1 will never overflow in any scenario and there are chances in some scenarios when r+l > max.INT (10^9);
// watch aditya verma 2binary for detailed explanation ;

/* 
! 1Q. Ascending sorted array ❔
*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nums = [-1, 0, 3, 5, 9, 12];
let search1 = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    //if the element is present at the middle "m";
    if (arr[mid] === x) return mid;
    //if the element is smaller than mid element ,
    // then it can only present in left side of the mid in the array ,cuz array is sorted
    else if (arr[mid] > x) r = mid - 1; // changing searh space ;
    //if the element is larger than mid element ,
    // then x can only present in right side of the mid ele ;
    else if (arr[mid] < x) l = mid + 1; // changing searh space ;
  }
  // if the elemnt is not founded in the array hence
  return -1;
};
// console.log(search1(arr, 12));

/*
   ! 2Q. Decending sorted Array || Reverse sorted array ❔
*/

let darr = [20, 17, 15, 14, 13, 12, 10, 9, 8, 4];

const search2 = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid = 0;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) r = mid - 1;
    else if (arr[mid] > x) l = mid + 1;
  }
  return -1;
};
// console.log(search2(darr, 4));

/* 
  ! 3Q. Order Agnostic search  ❔
  ? in this we know that array is sorted ,but we dont know its ascending or desending ;
*/

const search3 = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid = 0;

  let bool;
  if (arr[l] > arr[r]) bool = false; // decending order;
  else bool = true; // ascending order;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === x) {
      return mid;
    } //
    else if (arr[mid] < x) {
      if (bool) l = mid + 1;
      else r = mid - 1;
    } //
    else if (arr[mid] > x) {
      if (bool) r = mid - 1;
      else l = mid + 1;
    }
  }
  return -1;
};

/* 
// shift+alt+a 
console.log(search3(darr, 12)); // 5 // decending order array;
console.log(search3(arr, -1)); // 0 // ascending order array ;
 */

/* 
 ! 4Q. 1st and Last Occurence of an Element ❔ 
 */

let arr4 = [2, 4, 10, 10, 10, 18, 20, 20];
// we know that array is ascending sorted ;
const searchFirstOccurence = (arr, x) => {
  // save res and search left ;
  let l = 0;
  let r = arr.length - 1;
  let mid, res;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      res = mid;
      r = mid - 1; // search left side of the current mid position to find first occurence;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  if (res) return res;
  return -1;
};
/* 
// shift+alt+a 
console.log(searchFirstOccurence(arr4, 10)); // 2
console.log(searchFirstOccurence(arr4, 20)); // 6
console.log(searchFirstOccurence(arr4, 100)); // -1
 */

const searchLastOccurence = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid, res;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      res = mid;
      l = mid + 1;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  if (res) return res;
  return -1;
};
/* 
//working
console.log(searchLastOccurence(arr4, 10)); // 4
console.log(searchLastOccurence(arr4, 20)); // 7
 */

/* 
 ! 5Q. Count of element in a sorted Array
*/
arr4 = [2, 4, 10, 10, 10, 18, 20, 20];

const countElement = (arr, x) => {
  let first = searchFirstOccurence(arr, x);
  let last = searchLastOccurence(arr, x);
  if (first !== -1) return last - first + 1;
  return -1; //x not exist;
};
/*
//working 
console.log(countElement(arr4, 10)); // 3
console.log(countElement(arr4, 20)); // 2
console.log(countElement(arr4, 30)); // -1
  */

/* 
 ! 6Q. Number of times sorted Array is rotated ; or index of minimum number in sorted rotated array ;
 ? array = [2,5,6,8,10,11,12,15,18] *non repeating
 ? after '4'times rotation ,input arr= [10,11,12,15,18,2,5,6,8] 15>8 ;so search right of 15;
                                     ? [15,18,2,5,6,8,10,11,12] 6<12 ;so save 6 and search left;
                                     ? [2,5,6,8,10,11,12,15,18] no rotation since arr[mid] > arr[len-1];
 ! if(arr[0] > arr[ar.len -1]){ // rotation happens} // search right;and find index of smallest no.
  arr[mid] < arr[0] ;then possibility is arr[mid] is smallest or smallest lie in left of arr[mid]
  !if(arr[0] < arr[ar.len -1]){ // rotation not happens} //output is 0;
 todo: find no. of times rotated ; no of times rotated;{ (arr.length-1)-(indexof(2)) + 1 }
 todo: so we actually need to find indexOf(smallest element);
   if(arr[mid] < arr[mid+1] && arr[mid] < arr[mid-1]){ return mid};
   what if l=r=0 in case of norotation ;
   or l=r=arr.length-1 , mid+1 will be undefined ; apply condition ;
*/

const notrarray = [2, 5, 6, 8, 10, 11, 12, 15, 18];
const rotatedArray = [15, 18, 2, 5, 6, 8, 10, 11, 12];
const rotatedArray2 = [10, 11, 12, 15, 18, 2, 5, 6, 8];
const rotatedArray3 = [5, 6, 8, 10, 11, 12, 15, 18, 2];

const numOfRotation = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  let mid, idx;
  let bool = true; //taking intially as array was a rotated array;
  if (arr[l] < arr[r] || l === r) return `Array was not rotated`; // not rotated at all hence no.of rotation is 0 ;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2); //

    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      idx = mid;
      break;
    } else if (arr[mid] > arr[r]) {
      l = mid + 1;
    } else if (arr[mid] < arr[r]) {
      idx = mid;
      r = mid - 1;
    } else if (l === r) {
      if (arr[mid] < arr[mid - 1]) {
        // if this executes than idx = mid ,else return -1
        idx = mid;
        break;
      }
      // return -1;
    }
  }
  console.log(idx);
  let count = arr.length - idx;
  return `Array was rotated ${count} times`;
};

/* console.log(numOfRotation(notrarray));
console.log(numOfRotation(rotatedArray));
console.log(numOfRotation(rotatedArray2));
console.log(numOfRotation(rotatedArray3));
 */
/* 
leetcode Q33.; 

! 7Q. Search in Rotated Sorted Array

* There is an integer array nums sorted in ascending order (with distinct values).
* Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
* such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
* For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
* Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
* You must write an algorithm with O(log n) runtime complexity.

Example 1:
? Input: nums = [4,5,6,7,0,1,2], target = 0
? Output: 4

Example 2:
?Input: nums = [4,5,6,7,0,1,2], target = 3
?Output: -1

Example 3:
?Input: nums = [4,5,6,7,0,1,2], target = 5 , Output: 1
?Input: nums = [6,7,0,1,2,4,5], target = 5 , Output: 6 compare arr[l]or arr[r] with target;
   
? [2,3,4,5,6,7,1] t = 7,
       

 ? [7,1,2,3,4,5,6] arr[l] = 7 ,t =1 
 

Example 4:
?Input: nums = [1], target = 0
?Output: -1
 

? Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

 */

const searchInRotatedSortedArray = (arr, x) => {
  // find pivot ;(minimum number's index)
  // then search accordingly
  let l = 0;
  let r = arr.length - 1;
  if (l === r) {
    if (x === arr[l]) return l;
    else return -1; // not exist in unit array ;
  }
  let mid, pivot;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    //[ 1, 3, 5 ]
    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      pivot = mid;
      break;
    } else if (arr[mid] < arr[r]) {
      pivot = mid;
      r = mid - 1;
    } else if (arr[mid] > arr[r]) {
      l = mid + 1;
    } else if (l === r) {
      if (arr[mid] < arr[mid + 1]) pivot = mid; //left most
      else if (arr[mid] < arr[mid - 1]) pivot = mid; // right most;
      break;
    }
  }

  // return [pivot, arr[pivot]]; // till here working fine ;

  // now we know pivot
  l = 0;
  r = arr.length - 1;
  mid = 0;
  if (x === arr[pivot]) {
    return pivot;
  } //
  else if (x > arr[pivot] && x <= arr[r]) {
    //lie in right of pivot ;
    l = pivot + 1;
    while (l <= r) {
      mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === x) return mid;
      else if (arr[mid] > x) r = mid - 1;
      else if (arr[mid] < x) l = mid + 1;
    }
  } //
  else if (x > arr[pivot] && x >= arr[0]) {
    // lie in left of pivot ;
    r = pivot - 1;
    l = 0;
    while (l <= r) {
      mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === x) return mid;
      else if (arr[mid] > x) r = mid - 1;
      else if (arr[mid] < x) l = mid + 1;
    }
  } //
  return "target didnt exist";
};

const numsArray = [2, 3, 4, 5, 6, 7, 1];
const numsArray1 = [7, 1, 2, 3, 4, 5, 6]; //error running ;
const numsArray2 = [6, 7, 0, 1, 2, 4, 5]; //working
const numsArray3 = [4, 5, 6, 7, 0, 1, 2]; // not working  ? -1

/* console.log("first");
console.log(searchInRotatedSortedArray(numsArray, 10)); // target didnt exist
console.log(searchInRotatedSortedArray(numsArray1, 6)); //6
console.log(searchInRotatedSortedArray(numsArray2, 2)); // 4
console.log(searchInRotatedSortedArray(numsArray2, 0)); // 2
console.log(searchInRotatedSortedArray(numsArray3, 0)); //4
console.log(searchInRotatedSortedArray([1, 3], 3)); //1
console.log(searchInRotatedSortedArray([1, 3, 5], 5)); //2
console.log(searchInRotatedSortedArray([1, 3, 5], 0)); // target didnt exist
 */

/*

! 8Q. Searching in nearly sorted array ;
  given array = [ 5,10,30,20,40]
  nearly sorted means ,any number that is supposed to be at Ith position(acc. to sorted)
  can possibly on (I-1)th position and (I+1)th position(index) ;

  for this we could modify BinarySearch ;
*/
const nearlySorted = [5, 10, 30, 20, 40];
const searchInNearlySorted = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    else if (mid >= 0 && arr[mid - 1] === x) return mid - 1;
    else if (mid <= arr.length && arr[mid + 1] === x) return mid + 1;
    else if (arr[mid] > x) r = mid - 2;
    else if (arr[mid] < x) l = mid + 2;
  }
  return -1;
};

/* 
console.log(searchInNearlySorted(nearlySorted, 30)); // 2
console.log(searchInNearlySorted(nearlySorted, 20)); // 3
console.log(searchInNearlySorted(nearlySorted, 40)); // 4
console.log(searchInNearlySorted(nearlySorted, 10)); // 1
console.log(searchInNearlySorted(nearlySorted, 5)); // 0
 */

/* 

! 9Q. Find floor of an Element in a sorted Array; 
given array = [1,2,3,4,8,10,10,12,29] element = 5;
? floor means ,for 7.5 , 7 is floor value and 8 is ceil value ;
in this num 5 is not present therefore floor is  " the greatest number smaller than 5 ";
possibly if 5 is in given array the floor value should be 5 itself, in the absence of 5 we wish to find 
greatest smaller digit than 5 ;
similar concept for ceiling value if asked in future; 

?approach

*/
// *                0, 1, 2, 3, 4,  5,  6, 7
const floorArray = [1, 2, 3, 4, 8, 10, 12, 29];

const floorOfElement = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let floor;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      floor = mid;
      break;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) {
      floor = mid;
      l = mid + 1;
    }
  }
  if (floor >= 0) return floor;
  return -1;
};
// console.log(floorOfElement(floorArray, 10)); //5
// console.log(floorOfElement(floorArray, 5)); //3 ,arr[3] = 4
// console.log(floorOfElement(floorArray, 8)); //4
// console.log(floorOfElement(floorArray, 9)); //4
// console.log(floorOfElement(floorArray, 29)); //7

/* 
! 10 Q. Find ceil of an Element in a sorted Array;
like given find ceil of 5 in array tht is 8 in the below array ;
the number that is just greater than or equal to the given element;
*/
const ceilArray = [1, 2, 3, 4, 8, 10, 10, 12, 19];
function ceilOfElement(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid, ceil;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      ceil = mid;
      break;
    } else if (arr[mid] > x) {
      ceil = mid;
      r = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    }
  }
  if (ceil >= 0) return ceil;
  return -1;
}
/*
console.log(ceilOfElement(ceilArray, 5)); // 4 arr[4] = 8 ;
console.log(ceilOfElement(ceilArray, 3.5)); // 3 arr[4] = 4 ;
console.log(ceilOfElement(ceilArray, 9)); // 5 arr[5] = 10 ;
console.log(ceilOfElement(ceilArray, 11)); // 7, arr[7] = 12 ;
console.log(ceilOfElement(ceilArray, -1)); // 0, arr[0] = 1 ;
console.log(ceilOfElement(ceilArray, -100)); // 0, arr[0] = 1 ;
console.log(ceilOfElement(ceilArray, 100)); // -1 means ceil doesnt exist ;
*/
/* 
! 
*/
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
// console.log(genCharArray("a", "z")); // ["a", ..., "z"]

/* 
! 11Q.Find the position of an element in an infinite sorted Array ; ***
index of "x" in [..............................infinite.]
https://youtu.be/FzvK5uuaki8 watch explaination ;
*problems
*1. high index ,as it is infinite the how to know arr.length;high index kha mark karu ;
so we need to find the range means l and r for applying in bs;
*/

const searchinInfinteSortedArray = (arr, x) => {
  let l = 0,
    r = 1,
    mid;
  while (x > arr[r]) {
    l = r;
    r = r * 2;
  }
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  return -1;
};

// making an big /infinite array;
let bigSeries = [];
for (let i = 1; i <= 10000000; i++) {
  bigSeries.push(i);
}

// console.log(bigSeries); // 10000000 numbers in array;[1,2,....... 9999999]
// console.log(searchinInfinteSortedArray(bigSeries, 9999)); // 9998

/* 
! 12 Q . Find the index of first occurrence of  "1" in Binary sorted Array ;
* binary sorted array means array contains only 0 and 1 ;
 eg. [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.....,1,1,1,1,1,1,1,1,1,1,1,1...]
 so here we need to find index of 1st "1" using binary search ;
*/
const binaryArray = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1,
];
const binarySortedArray = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let mid, idx;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      idx = mid;
      r = mid - 1;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  if (idx >= 0) return idx;
  else return -1;
};

/*
console.log(binarySortedArray(binaryArray, 1)); //22 arr[22] = 1,first occ of 1;
console.log(binarySortedArray(binaryArray, 0)); //0, arr[0] = 0,first occ of 0;
*/

/* 
what if the series is infintely long
! 13 Q . Find the index of first occurrence of  "1" in INFINTE Binary sorted Array ;
* binary sorted array means array contains only 0 and 1 ;
 eg. [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.....,1,1,1,1,1,1,1,1,1,1,1,1...]
 so here we need to find index of 1st "1" using binary search ;
*/
let bigBinSeries = [];
for (let i = 0; i <= 1000; i++) {
  if (i < 500) bigBinSeries.push(0);
  else bigBinSeries.push(1);
}
//                 indices   0,1,2,.........499,500,501,........1000
// console.log(bigBinSeries);[0,0,0............0, 1 , 1 ,........, 1 ]

const searchinInfiniteBinary = (arr, x) => {
  let l = 0;
  let r = 1;
  let idx, mid;
  while (x > arr[r]) {
    l = r;
    r = r * 2;
  }

  // now we get new l and r ,between which the first occurence lie;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      idx = mid;
      r = mid - 1;
    } else if (arr[mid] < x) l = mid + 1;
    else if (arr[mid] > x) r = mid - 1;
  }
  if (idx >= 0) return idx;
  return -1;
};
/*
console.log(searchinInfiniteBinary(bigBinSeries, 1)); //500 , arr[500] = 1 ;
console.log(searchinInfiniteBinary(bigBinSeries, 0)); //0 , arr[0] = 0; first occurrence
*/

/* 
 ! 14Q. Minimum Absoulute difference element in the sorted Array for a given key ;
 let ,key = 7;
 arr = [4,6,10];
 ? so we need to find a number 'x' for which key-x is minimum;
 absoulute difference means |key-x| > 0;10-7 =3 ,7-6 = 1;
 so answer would be 6; 
 * so we will search for floor value for key and ceil value for key ;
 ? and then decide which will be the answer ;
 ? |key-floor| or |key- ceil| which ever is smallest ;
 */
const diffArray = [4, 5, 6, 9, 10];
const findMinDiff = (arr, x) => {
  let l = 0,
    r = arr.length - 1,
    mid,
    floor,
    ceil;
  // search floor value;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      floor = mid;
      break;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) {
      floor = mid;
      l = mid + 1;
    }
  }
  // now search ceil value
  (l = 0), (r = arr.length - 1);
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      ceil = mid;
      break;
    } else if (arr[mid] > x) {
      ceil = mid;
      r = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    }
  }

  // console.log(arr[floor] + " " + floor); //6
  // console.log(arr[ceil] + " " + ceil); //9
  let diffFloor = Math.abs(x - arr[floor]);
  let diffCeil = Math.abs(x - arr[ceil]);

  if (diffCeil <= diffFloor) return ceil;
  return floor;
};
// ? timecomplexity  = log(n)+log(n) = 2 log(n)
// console.log(findMinDiff(diffArray, 7)); //2 arr[2] = 6;
// console.log(findMinDiff(diffArray, 6)); //2 arr[2] = 6;
// console.log(findMinDiff(diffArray, 12)); // ? 4 arr[4] = 10; ceil will be undefined as no num is greater than 12 in array;

/* 
*other way ;https://youtu.be/3RhGdmoF_ac

*/
const FindMinimumDiff = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let idx, mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      idx = mid;
      break;
    } else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  if (idx) return idx + "its idx";
  else {
    let diffFloor = Math.abs(x - arr[r]);
    let diffCeil = Math.abs(x - arr[l]);
    if (diffFloor >= diffCeil) return l;
    else return r;
  }
};
// ? timecomplexity  = log(n)
// console.log(FindMinimumDiff(diffArray, 7)); // 2 , arr[2] = 6 ,7 - 6 = 1
// console.log(FindMinimumDiff(diffArray, 12)); // 4 , arr[4] = 10 , 12-10 = 2

/* 
! 15 Q. Find peak element  

* most popular question of BS;

? in this question we will apply concept of applying binary search on Answer ,
? means the array will not be fully sorted and though we will apply binary search ; 
*peak element is number that is greater than both its neighbour/adjactent elements;
 arr = [ 5,10,20,15 ]  here 20 is the peak element and its index is 2;
? peak element can be greater than two ;
 arr = [ 10 , 20 , 15 , 2 , 23 , 90 , 67 ] here 20 and 90 both are peak element ; 
 
 arr = [ 50 , 40 , 60 , 70 , 80 ] here 80 and 50 both are peak element ;
 */
let peakArray = [5, 10, 10, 11, 12, 30];

// ? [5, 10, 20, 15]
const findPeak = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let peak;
  if (l === r) return l; // *cases like [1]

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    //console.log(mid);
    if (mid === 0 && arr[mid] > arr[mid + 1]) {
      peak = mid;
      break;
    } else if (mid === arr.length - 1 && arr[mid] > arr[mid - 1]) {
      peak = mid;
      break;
    } else if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      peak = mid;
      break;
    } else if (arr[mid - 1] > arr[mid]) {
      //move left
      r = mid - 1;
    } else if (arr[mid + 1] > arr[mid]) {
      //move right
      l = mid + 1;
    }
  }
  return peak;
};
// console.log(findPeak(peakArray));

/* 
! 16Q. Bitonic Array ,find max element ;
* what is bitonic array --> monotonially icreasing first than monotonically decreasing ;
* no element repeating ; and thus in bitonic array there would be only one peak element ;
* we can apply binery seach on answer ,that we used in peak element question ;
? [1,3,8,12,4,2]
*/

let biArray = [1, 3, 8, 12, 4, 2];
// console.log(findPeak(biArray)); // 3 ,arr[3] = 12 ;

/* 
! 17Q. Search in Bitonic Array ;
? in array [1,3,8,12,4,2] search position of 4 ;
do apply binary search ; 
* we can split the given array as [1,3,8]ascending sorted array 
* and [12,4,2] decending sorted Array ;
* then appply binary search in both ;
* we can split by knowing the index of 12 that is the peak element ;
*/

const searchInBi = (arr, x) => {
  const peak = findPeak(arr); // finded peak element ;
  // console.log(peak);
  //*for ascending -regular bs code;
  let l = 0,
    r = peak - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) r = mid - 1; // 1, 3, 8
    else if (arr[mid] < x) l = mid + 1;
  }
  // * for decending order bs code
  (l = peak), (r = arr.length - 1);
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) l = mid + 1;
    else if (arr[mid] < x) r = mid - 1;
  }
};

// console.log(searchInBi(biArray, 4)); //4 , arr[4] = 4 ;

/* 
! 18Q . Search in 2d array with sorted rowwise and columwise 
*popular question

*/

let matrixArr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
const searchInMatrix = (arr, x) => {
  let n = arr.length;
  let m = arr[0].length;
  let i = 0;
  let j = m - 1;
  while (j >= 0 && i <= n - 1) {
    if (arr[i][j] === x) {
      return [i, j];
    } else if (arr[i][j] > x) j--;
    else if (arr[i][j] < x) i++;
  }
  return -1;
};

// console.log(searchInMatrix(matrixArr, 30)); // [ 0, 2 ]
// console.log(searchInMatrix(matrixArr, 27)); // [ 2, 0 ]
// console.log(searchInMatrix(matrixArr, 45)); // [ 1, 3 ]
// console.log(searchInMatrix(matrixArr, 54)); // -1
// * its time complexity for worst case is O(m+n)

/*
! 19Q. Allocate Minimum Number of Pages from N books to M students .
Given that there are N books and M students. Also given are the number of pages in each book
in ascending order. The task is to assign books in such a way that the maximum number of pages
 assigned to a student is minimum, with the condition that every student is assigned to read 
 some consecutive books. Print that minimum number of pages.
* Best question ;

? Input: N = 4, pages[] = {12, 34, 67, 90}, k = 2 , k is no. of students ;

? Output: 113

Explanation: There are 2 number of students. Books can be distributed in following combinations: 

1. [12] and [34, 67, 90] -> Max number of pages is allocated to student ‘2’ with 34 + 67 + 90 = 191 pages
2. [12, 34] and [67, 90] -> Max number of pages is allocated to student ‘2’ with 67 + 90 = 157 pages 
3. [12, 34, 67] and [90] -> Max number of pages is allocated to student ‘1’ with 12 + 34 + 67 = 113 pages
?  Of the 3 cases, Option 3 has the minimum pages = 113.
watch striver solution and aditya verma both are good for this;
*/

const minimalInArray = (arr) => {
  let minimum = arr[0]; //keep it maximum or  arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minimum > arr[i]) minimum = arr[i];
  }
  return minimum;
};
const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
const allocationIfPossible = (arr, barrier, k) => {
  let allocatedstu = 1;
  let pages = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > barrier) return false;
    else if (pages + arr[i] > barrier) {
      allocatedstu += 1;
      pages += arr[i];
    } else pages += arr[i];
  }
  if (allocatedstu > k) return false;
  else return true;
};

let books = [12, 34, 67, 90];
let books1 = [10, 20, 30, 40];

const minPages = (arr, k) => {
  let low = minimalInArray(arr);
  let high = sumOfArray(arr);
  let res = -1;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (allocationIfPossible(arr, mid, k)) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
};

// console.log(minPages(books, 2)); // 113
// console.log(minPages(books1, 2)); // 60
