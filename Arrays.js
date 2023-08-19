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
9.Union of two sorted array ; 
intersection of arrays
! 10.Find missing number in an array
11.Maximum Consecutive Ones
12.Find the number that appears once, …
todo: 13.Longest subarray with given sum K(p…
todo: 14.Longest subarray with sum K (Positi…


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

//!12. Find the number that appears once, and the other numbers twiceb
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
2.better:use hashmap  ;tc:O(N) ,sc:O(n)
3.optimal use pointers ;tc:O(N) ,sc=0(1)

              0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ;
*/
let subArr = [1, 2, 3, 1, 1, 1, 0, -1, -1, 2, 1, 4, 2, 3];

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

// const LongestSubArraySumBetter = (arr, k) => {
//   let myMap = new Map();
//   let sum = 0;
//   let maxLen = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//     }
//     let remainder = sum - k;
//   if(myMap.has(remainder) !=)
// }
//   return maxLen;
// };
//  i     j  i     j
// [1, 2, 1, 1, 1, 1, 0, -1, -1, 2, 1, 4, 2, 3];k=6

const LongestSubArraySumOptimal = (arr, k) => {
  let n = arr.length;
  let len = 0;
  let sum = 0,
    i = 0,
    j = 0;
  while (j < n) {
    sum += arr[j];
    if (sum < k) {
      j++;
    } else if (sum === k) {
      len = Math.max(len, j - i + 1);
      sum = sum - arr[i];
      i++;
      j++;
    } else if (sum > k) {
      i++;
    }
  }
  return len;
};
// console.log(LongestSubArraySumOptimal(subArr, 6));

/* 
!Q . two sum problem ,

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

console.log(twoSumOptimal(twoArr, 9));
