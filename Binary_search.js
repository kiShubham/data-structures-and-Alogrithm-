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
let arr = [-1, 0, 3, 5, 9, 12];
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
// console.log(search1(arr, 9));

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
// console.log(search2(darr, 13));

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
 ! 6Q. Number of times sorted Array is rotated ;
 ? array = [2,5,6,8,10,11,12,15,18] *non repeating
 ? after '4'times rotation ,input arr= [10,11,12,15,18,2,5,6,8] 15>8 ;so search right of 15;
                                     ? [15,18,2,5,6,8,10,11,12] 5<12 ;so save 5 and search left;
                                     ? [2,5,6,8,10,11,12,15,18] no rotation
 ! if(arr[0] > arr[ar.len -1]){ // rotation happens} // search right;and find index of smallest no.
  arr[mid] < arr[0] ;then possibility is arr[mid] is smallest or smallest lie in left of arr[mid]
  !if(arr[0] < arr[ar.len -1]){ // rotation not happens} //output is 0;
 todo: find no. of times rotated ; no of times rotated;{ (arr.length-1)-(indexof(2)) + 1 }
 todo: so we actually need to find indexOf(smallest element);
   if(arr[mid] < arr[mid+1] && arr[mid]<arr[mid-1]){ return mid};
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
        idx = mid;
        break;
      }
      return -1;
    }
  }
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
*Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
*Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
*You must write an algorithm with O(log n) runtime complexity.

Example 1:
? Input: nums = [4,5,6,7,0,1,2], target = 0
? Output: 4

Example 2:
?Input: nums = [4,5,6,7,0,1,2], target = 3
?Output: -1

Example 3:
?Input: nums = [4,5,6,7,0,1,2], target = 5 Output: 1
?Input: nums = [6,7,0,1,2,4,5], target = 5 Output: 6 compare arr[l]or arr[r] with target;

*if arr[l] > target {true -> search right of mid -> l = mid + 1 }
*                   {false-> search left of mid  -> r = mid - 1 }
   

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
