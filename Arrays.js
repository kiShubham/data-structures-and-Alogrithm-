/* 
n² ,
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
9.Union of two sorted array ; dd
intersection of arrays
! 10.Find missing number in an array
11.Maximum Consecutive Ones
12.Find the number that appears once, …
todo: 13.Longest subarray with given sum K(p…
todo: 14.Longest subarray with sum K (Positi…

  15.2Sum Problem
* 16.Sort an array of 0's 1's and 2's, dutch national flag algorithm ; 
* 17.Majority Element (>n/2 times) , moores algorithm  ;
* 18 .Kadane’s Algorithm : Maximum Subarray Sum in an Array
  19. Best Time to Buy and Sell Stock
20.Next Permutation
21. Leaders in array  ;
22.Longest Successive Elements
* merge sorted Array ;


*/

// * always say "TimeComplexity" and "SpaceComplexity" and the "ExtraSpace" we are using ;

const liarr = [2, 3, 4, 5, 6, 10, 8, 9];
//!linear search  ,search k in arr
function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return true;
  }
}
// console.log(linearSearch(liarr, 10)); //true

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

// console.log(unionSorted(sarr1, sarr2)); // [ 1, 2, 3, 4, 5, 6 ]

//!intersection of two sorted array ;
let a = [1, 2, 2, 3, 3, 4, 5, 6, 7];
let b = [2, 3, 3, 5, 5, 6];
/* 
o/p :  [2,3,3,5,6] only the one who has pair ;
use the two pointers;
1.which has smaller one at first that will move ; 
*/

const intersectionArrays = (arr1, arr2) => {
  let ans = [];
  let m = arr1.length;
  let n = arr2.length;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }
  return ans;
};
// console.log(intersectionArrays(a, b)); // [ 2, 3, 3, 5, 6 ]
// Timecomplxity:O(n+m) ;sc:O(1)
/* 
1 0
2 0
3 0
3 1
4 1
5 1
5 2
5 3
6 3
7 3
 */

//todo please see striver : 10.Find missing number in an array ;use XOR
/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. 


Input Format: N = 5, array[] = {1,2,4,5}
Result: 3

better soln: we could use Hashing ;make a hash array ; TC : O(n)+O(n) ; SC : O(n) ; still we can reduce space complexity ;
there are Optimal solution : SUM :tc O(n) sc=O(1) ;
XOR : n^n = 0 ; 0^n = n ; tc O(n) sc=O(1)
*/
let missArr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = function (nums) {
  let n = nums.length;
  let arr = new Array(n + 1);
  for (var i = 0; i < n; i++) {
    arr[nums[i]] = "1";
  }
  for (var i = 0; i <= n + 1; i++) {
    if (arr[i] !== "1") {
      return i;
    }
  }
};
// console.log(missingNumber(missArr));

const missingNumberSum = (nums) => {
  let n = nums.length;
  let Apsum = (n * (n + 1)) / 2;
  let givenSum = 0;
  for (let i = 0; i < nums.length; i++) {
    givenSum += nums[i];
  }
  return `missing Number is : ${Apsum - givenSum}`;
};
// console.log(missingNumberSum(missArr)); //tc O(n) sc O(1)
//but the problem is if n = 1000000 ; and the Apsum = 1000000*100001 ~= 10^10{power};
// this will overflow and the value cant be stored in a interger ;

// ! very important;
const missingNumberXOR = (nums) => {
  let n = nums.length;
  let xor1 = 0; // for 0to N natural no.
  let xor2 = 0; // for given nums number ;
  for (let i = 0; i < n; i++) {
    xor2 = xor2 ^ nums[i]; //0^9^6^4^2^3^5^7^0^1
    xor1 = xor1 ^ (i + 1); // 0^1^2^3^4^5^6^7^8^9
  }
  return xor1 ^ xor2; //8
};
// console.log(missingNumberXOR(missArr)); //tc O(n) sc O(1)

// ! 11.Maximum Consecutive Ones
let consecutive = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1]; //o/p: 3;
const maxConsecutiveOnes = (arr) => {
  let n = arr.length;
  let max = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count++;
      if (count > max) max = count;
    } else if (arr[i] == 0) count = 0;
  }
  return max;
};
// console.log(maxConsecutiveOnes(consecutive));

//!12. Find the number that appears once, and the other numbers twice
/* 
brute force - double loop;
better: hash array , hash map ; 
optimal : Xor the whole given array ;n^n = 0 and 0^n = n ;
since every element except ans is coming twice , therefore , n^n will be 0 and ans^0 = ans ;
*/

let onceArr = [1, 1, 2, 3, 3, 4, 4]; //o/p: 2

function OnceInTwice(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
}
// console.log(OnceInTwice(onceArr)); // 2

//! extra Q:Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// use Hashmap ;sc :O(N),tc:O(N) we need to find one solution such sc:O(1) ;

const singleNumber = function (nums) {
  let ans = 0;
  let n = nums.length;
  let myMap = new Map();
  for (let i = 0; i < n; i++) {
    if (myMap.has(nums[i])) {
      let temp = myMap.get(nums[i]);
      myMap.set(nums[i], temp + 1);
    } else {
      myMap.set(nums[i], 1);
    }
  }
  const iterator = myMap.keys();
  const iterator1 = myMap.values();
  for (let i = 0; i < myMap.size; i++) {
    let num = iterator1.next().value;
    let key = iterator.next().value;
    if (num == 1) ans = key;
  }

  return ans;
};

// console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));

/*
!13.Longest subarray with given sum K( positive number array ) givn k = 3 ;
subarray-contigous part of array ;
1.brute : we will generate all the subarrays, find there sum and compare it with k ;tc:(n^3,or ,n^2)
2.better:use hashmap  ;tc:O(N) ,sc:O(n) with prefix sum
3.optimal use pointers ;tc:O(N) ,sc=0(1)

              0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ;
*/
let subArr = [1, 2, 3]; //[(3, 1, 1, 1, 0, -1, -1, 2, 1, 4, 2, 3)];

const LongestSubArraySumBrute1 = (arr, k) => {
  //tc:O(n^2)
  let l = 0; //lenght of subArray
  let n = arr.length;
  let num = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let count = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      count++;
      if (sum === k) {
        sum = 0;
        if (count > l) {
          l = count;
          num = i;
        }
        // break;
      }
      if (sum > k) break;
    }
  }
  return c;
  return [l, num];
};
// console.log(LongestSubArraySumBrute1(subArr, 3));

const LongestSubArraySumBrute2 = (arr, k) => {
  //tc:O(n^3)
  let l = 0; //lenght of subArray
  let n = arr.length;
  let num = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      let count = 0;
      for (let p = i; p <= j; p++) {
        sum += arr[p];
        count++;
        if (sum === k) {
          if (count > l) {
            l = count;
            num = i;
          }
        }
      }
    }
  }
  return [l, num];
};
// console.log(LongestSubArraySumBrute2(subArr, 3));

// optimal solution for cases array including +ves , -ves and 0's ;
// * we are saving prefix sum in hashmap due to timecomplexity ;
// ! used prefix sum // best approach  for this Question ;
function LongestSubArraySumOptimalHashing(arr, k) {
  let n = arr.length;
  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];

    //* checking directly for sum;
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    //* checking for prefix sum
    let rem = sum - k;
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    //* adding in the map ;
    if (!preSumMap.has(sum)) {
      // this condition is very necessary ;
      //if we need shortest this condition will not use along with logic change inabove;
      preSumMap.set(sum, i);
    }
  }
  // console.log(preSumMap);
  return maxLen;
}

// [1, 2, 1, 1, 1, 1, 0, -1, -1, 2, 1, 4, 2, 3];k=6
// console.log(LongestSubArraySumOptimalHashing(sample, 3)); // workking

// two pointer approach ;
//*  this is optimal for arrays containing only positives and 0's not negative ;
const LongestSubArraySumOptimal = (arr, k) => {
  let maxLen = 0;
  let left = 0,
    right = 0;
  let n = arr.length;
  let sum = arr[0];

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++; // ise neche ni likh sakte

    if (right < n) {
      // main point yha hum sum < k , check nhi kar rhe ,
      sum += arr[right];
    }
  }
  return maxLen;
};
//tc : O(2n) worst case  ;;; see the video for understanding tc ;sc =O(1) ;
// console.log(LongestSubArraySumOptimal(subArr, 6)); // not working

/* 

!15Q . two sum problem ,

todo: [1,3,6,7,8,12] target = 14 ;
return the index of number add up to target ;here [2,4] ,6 and 8 ;
brute force -> double loop check for every element + every other element = target,tc =O(n2);

better ->hashing , tc =  O(n) to O(logn) to O(n2) ;
optimal --> sort then search using pointer ; tc->O(n+logn+n+n+n) => tc = O(nlogn);


there are two variety of the Question : 
1. return boolean if there exist ay arr[i]+arr[j] = target ;for this optimal solution is the best ;
2. return [i,j] ;for this better soln using hashing is the optimal one ;
*/

// let twoArr = [1, 3, 6, 7, 8, 12];
let twoArr = [2, 7, 11, 15];

const twosumBetter = (arr, target) => {
  let n = arr.length;
  const myMap = new Map();
  let p = 0;
  while (p < n) {
    let search = target - arr[p];
    const bool = myMap.has(search);
    if (bool) {
      let q = myMap.get(search);
      return [p, q];
    } else {
      myMap.set(arr[p], p);
      p++;
    }
  }
  return -1; // dont exist ;
};
// console.log(twosumBetter(twoArr, 14));
// console.log(twosumBetter(twoArr, 9));

const twoSumOptimal = (nums, target) => {
  let n = nums.length;
  let l = 0,
    r = n - 1;

  let arr = new Array(n); //copy of original nums;
  for (var i = 0; i < n; i++) {
    arr[i] = nums[i];
  }
  //sort the array  nums in increasing order;
  nums.sort(function (a, b) {
    return a - b;
  });

  while (l < r) {
    let sum = nums[l] + nums[r];
    if (target == sum) {
      break;
    } else if (target > sum) l++;
    else if (target < sum) r--;
  }

  var x = 0,
    y = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == nums[l]) x = i;
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == nums[r] && j != x) y = j;
  }
  return [x, y];
};

// console.log(twoSumOptimal(twoArr, 9));

/* 
!16 Q.Sort an array of 0's 1's and 2's ,
todo : please please watch the video to understand fully , 
todo : you might think you got this but you should watch the "striver video" on this ;  
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
better -> hash or  use arrys [2,2,2] no of 0,1 and 2 at the index later make new array out of it and return;
optimal -> 
*Algorithm:  Dutch national flag algorithm ,3 pointer
*/

// let NumArr = [2, 0, 2, 1, 1, 0];
let NumArr = [2, 0, 1];

const sortArray = (nums) => {
  let n = nums.length;
  let low = 0,
    mid = 0,
    high = n - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[mid];
      nums[mid] = nums[low];
      nums[low] = temp;
      console.log("iteration 0: " + nums);
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      console.log("iteration1 : " + nums);
      mid++;
    } else if (nums[mid] === 2) {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
      console.log("iteration 2 : " + nums);
    }
  }
  return nums;
};
// console.log(sortArray(NumArr));

/* 
!Q17. majority elements ;
Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array.
You may consider that such an element always exists in the array.
n = length of array ;
 
take floor value for n/2 , 
Input: nums = [3,2,3] , so n = 3 ; math.floor(3/2) = 1 ;
Output: 3 , 

brute: nested loop ;
better : hash map ;
optimal '
*/
const mjElem = [2, 2, 1, 3, 1, 1, 3, 1, 1];
// tc = O(nlogn)+O(n); sc=O(n) for map
// use hash map as additional space ; so more to optimise

const majorityElemBetter = (nums) => {
  let n = nums.length;
  let myMap = new Map();
  for (let i = 0; i < n; i++) {
    //tc forloop=O(n) and if the map is ordered map - O(logn)
    if (myMap.has(nums[i])) {
      let count = myMap.get(nums[i]);
      myMap.set(nums[i], count + 1);
    } else {
      myMap.set(nums[i], 1);
    }
  }
  let max = Math.floor(n / 2);
  let ans = 0;
  const keyIterator = myMap.keys();
  const valueIterator = myMap.values();
  for (let i = 0; i < myMap.size; i++) {
    // tc=O(N) traversing in map
    let value = valueIterator.next().value;
    let key = keyIterator.next().value;
    if (value > max) {
      ans = key;
    }
  }
  return ans;
};

// console.log(majorityElemBetter(mjElem));

//* Algoritm : Moore's voting algorithm ;understand by watching video striver majority Element;;
//  [2, 2, 1, 3, 1, 1, 3, 1, 1]
function majorityElemOptimal(nums) {
  let n = nums.length;
  let i = 1;
  let count = 1;
  let key = nums[0];
  while (i < n) {
    if (count === 0) {
      key = nums[i];
    }
    if (key === nums[i]) {
      count++;
    } else if (key !== nums[i]) {
      count--;
    }
    i++;
  }
  return key;
}
// console.log(majorityElemOptimal(mjElem));

/* 
! 18Q. Kadane’s Algorithm : Maximum Subarray Sum in an Array
  arr = [-2,-3,4,-1,-2,1,5,-3] ans = 7;
  brute - trying out all the subArrays -> nested forloop; tc=O(n3) n3 hi h n2 nhi;
  better - nested forloop - tc=O(n2)
* optimal - kadanes algorithm 
*/
// const kadaneArr = [-2, -3, 4, -1, -2, 1, 5, -3]; // 7
const kadaneArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6 :[4,-1,2,1,-5,4]

const KadaneAlgo = (nums) => {
  let n = nums.length;
  let max = Number.MIN_SAFE_INTEGER;

  let sum = 0;
  let i = 0;
  while (i < n) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
    i++;
  }
  return max;
};
console.log(KadaneAlgo(kadaneArr));

/*
! 19Q.  Best Time to Buy and Sell Stock -> interviewer will ask for space optimisation technique
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

we will use Dynamic programming ;dp means remembering the past ; 
Tc = O(n)
*/
const stock = [7, 1, 5, 3, 6, 4];
const buyStocks = (nums) => {
  let n = nums.length;
  let min = nums[0];
  let maxProfit = 0; //if we buy and sell on same day
  let i = 1;
  while (i < n) {
    let currProfit = nums[i] - min;
    maxProfit = Math.max(maxProfit, currProfit);
    min = Math.min(nums[i], min); // here using dp ; remembering the past

    i++;
  }
  return maxProfit;
};
// console.log(buyStocks(stock));

/* 
! 20Q.Rearrange Array Elements by Sign 
There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements.
Without altering the relative order of positive and negative elements, 
you must return an array of alternately positive and negative values.
brute force-> make two separate array pos=[all positve num in array num],  neg= [all neg];
arrange it again indexwise in nums ;tc=o(n+n/2)


*/
const arrElem = [3, 1, -2, -5, 2, -4];
var rearrangeArray = function (nums) {
  let n = nums.length;
  let posIdx = 0;
  let negIdx = 1;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      ans[negIdx] = nums[i];
      negIdx += 2;
    } else {
      ans[posIdx] = nums[i];
      posIdx += 2;
    }
  }
  return ans;
};
// console.log(rearrangeArray(arrElem));

/* 
similar question with some variety ;
!Q . This is an array "A" of size "N" with positive and negative element , without altering 
the relative order of positive and negative numbers , you must return an array of alternative positive and negative value ;
 input : [ 1, 2, -4, -5 ,-6]
output : [ 1, -4, 2, -5 , -6 ] 
we will like to use the brute force in this case ->
pos = [all pos number ]
neg = [all neg number];

*/
const arr9 = [1, 2, -4, -5, -6]; // [ 1, -4, 2, -5, -6 ]

const alternateRearrangeArray = (nums) => {
  // tc =O(2n)
  let n = nums.length;
  let pos = [];
  let neg = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) neg.push(nums[i]);
    else {
      pos.push(nums[i]);
    }
  }
  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      nums[i * 2] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    let idx = neg.length * 2;
    for (let i = neg.length; i <= pos.length; i++) {
      nums[idx] = pos[i];
      idx++;
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      nums[i * 2] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
    let idx = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      nums[idx] = neg[i];
      idx++;
    }
  }
  return nums;
};
// console.log(alternateRearrangeArray(arr9)); // [ 1, -4, 2, -5, -6 ]

/* 
!20Q.
*/

/* 
!21Q. Leaders in an Array
Problem Statement: Given an array, print all the elements which are leaders. 
A Leader is an element that is greater than all of the elements on its right side in the array.
Input:
 arr = [10, 22, 12, 3, 0, 6]
Output:
 22 12 6

*Brute: assume arr[i] as a leader ,in nested loop iterate from i+1 to n-1 , check if all are small , then arr[i] will be a leader ;
tc=~O(n2) ,not exactly it will be near about ;sc=maxO(n2) min O(1): if no leader found ;
*optimal : iterate from right , then store max in a variable ;check arr[i]>max;  update max as moving ;


*/
//assume all intergers of array are greater than -1 ;
const lead = [10, 22, 12, 3, 0, 6];

export default function leaderInArray(nums) {
  let n = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let leaders = [nums[n - 1]];
  for (let i = n - 2; i >= 0; i--) {
    max = Math.max(nums[i + 1], max);
    if (nums[i] > max) leaders.push(nums[i]);
  }
  return leaders;
}

// console.log(leaderInArray(lead));

/* 
!22Q.Longest Successive Elements or  128. Longest Consecutive Sequence
Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*extereme brute: O(n2) , nested loop check next element , maintain count varible ; 
*brute: sort nlogn, check consecutive(gap should be 1) length O(n) ;
*/
// let longArr = [100, 102, 100, 101, 101, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 103]; //4
let longArr = [100, 4, 200, 1, 3, 2]; //4
//better soln;
// sorted =[1,1,1,2,2,2,3,3,4,4,100,100,101,101,102,103]
function longestConsSequence(nums) {
  let n = nums.length;
  if (n === 0) return 0; //[]

  let maxCount = 1;
  let count = 1;

  // 1. sort the arr
  nums.sort((a, b) => a - b);
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
    } else if (nums[i] - 1 === nums[i - 1]) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else if (nums[i] - 1 !== nums[i - 1]) {
      count = 1;
    }
  }
  return maxCount;
}

// console.log(longestConsSequence(long2));
let long2 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

//optimal ;using hashset ; //O(3n) = O(n)
function longestConsSequenceOptimal(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let mySet = new Set(); //O(1)
  let count = 1;
  let maxCount = 1;

  nums.forEach((element) => mySet.add(element)); //O(n)

  const iterator1 = mySet[Symbol.iterator]();

  for (let i = 0; i < mySet.size; i++) {
    //O(n)
    let temp = iterator1.next().value;
    if (mySet.has(temp - 1)) {
      //skip
    }
    if (!mySet.has(temp - 1)) {
      let bool = true;
      let k = temp;
      while (bool) {
        //O(2n)
        if (mySet.has(k + 1)) {
          count++;
        }
        if (!mySet.has(k + 1)) {
          bool = false;
          count = 1;
        }

        k += 1;
        maxCount = Math.max(count, maxCount);
      }
    }
  }
  return maxCount;
}

// console.log(longestConsSequenceOptimal(long2));

// !Q. Number Of SubArray With Sum K

//*brute:
const numberOfSubArraysSumKBrute = (arr, k) => {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
        // break; // do not break misses other cases ;
      }
    }
  }
  return count;
};

//*two pointer approach ;works well with all positives and zeros
function numberOfSubArraysSumK(arr, k) {
  let n = arr.length;
  let left = 0,
    right = 0;
  let count = 0;
  let sum = arr[0];

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      count++;
    }
    right++; // sum ko initially arr[0] rakha h , isliye right ++ pehle karenge then

    if (right < n) {
      sum += arr[right];
    }
  }
  return count;
}
//              0, 1, 2,  3, 4, 5  6  7  8   9
const sample = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
// console.log(numberOfSubArraysSumK(sample, 3)); // giving 3 , answer is 8
// console.log(numberOfSubArraysSumKBrute(sample, 3)); // giving 8 , perfect ;

// todo:  Optimal hashing with hashmap with prefix sum;

function NumberOfSubArrayWithSumKOptimal(arr, k) {
  let count = 0;
  let sum = 0;
  let preSumMap = new Map(); //(sum, count)
  let n = arr.length;

  preSumMap.set(0, 1); // watch the video you will understand ;
  // we are not using if(sum===k), just checking rem = sum-k ; sum =3 ; therefor sum-k =0;
  //so there exist a 0 with which we can compare , so that we are puting (0,1) in map ;
  // also if we dont do it some cases were left ; watch the video of striver on youtube(11:00) ; for proper explanation ;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    let rem = sum - k;
    if (preSumMap.has(rem)) {
      count += preSumMap.get(rem);
    }

    preSumMap.set(sum, (preSumMap.get(sum) || 0) + 1);
  }

  return count;
}

// console.log(NumberOfSubArrayWithSumKOptimal(sample, 3)); // 8
// console.log(NumberOfSubArrayWithSumKOptimal([-3, 3, 1, 1, 1], 3)); //3
// do a dry run with [-3,3,1,1,1] you will understand the significance of seting (0,1) ;

// ! Merge two sorted Array without using extra space ;
