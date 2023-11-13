/*  
todo:
*- [ 7 ] Find the reverse of the number 
!- [ ] Count the number of prime less than N
*- [ ] Find the factorial of the number 
*- [ Y] Factorial Trailing Zeroes : how many zero in factorial ;
* - [Y ] Find if the given number is palindrome
*- [ ] Find if the given string is a palindrome
!- [ ] Find number of primes in the given range 
* - [ ] Find Gcd of two numbers 
*- [ 26 ] Remove Duplicates From sorted Array 
* - [ 88 ] Merge sorted Array 
*  - [1572 ] Find diagonal Sum
* - [ 189 ] Rotate the Array to the Right by k steps !important
* - [ ] find the sum of minimum and maximum element 
*- [ ] Write a function that reverse an array 
*- [ 242 ] Find if the given two strings are a valid anagram 
- [ 20] Find if the given string is a valid parenthesis
- [ ] write a fn to reverse a string
- [ ] count frequency of characters
- [ ] remove whitespaces from a string 
- [ ] capitalize the first letter of each word in a sentence
- [ ] Frequency of words in a string 
- [ ] Mock : Factorial Digit sum **
- [ ] mock: two sum 
- [ ] Reverse word in a string
- [ ] Longest common prefix ;
*/

// * - [ ] Find the reverse of the number  // ans = ans * 10 + (x % 10);

var reverse = function (x) {
  const flag = false ? x > 0 : x < 0;
  if (flag) x = x * -1;
  let ans = "";

  while (x >= 1) {
    let temp = x % 10;
    x = x - temp;
    x = Math.floor(x / 10);
    ans += `${temp}`;
  }
  ans = Number(ans);
  flag ? (ans = ans * -1) : ans;

  if (ans < -2147483648 || ans > 2147483647) return 0; // limits 2^31 integer limit ;
  return ans;
};
// console.log(reverse(120002));
// console.log(reverse(-120002));

//* - [ ] Find the factorial of the number

function factorialBasic(n) {
  if (n === 1) return 1;
  return n * factorialBasic(n - 1);
}
// console.log(factorialBasic(10));

//* - [ ] Factorial Trailing Zeroes : how many zero in factorial ; intution:  2*5 = 10

var trailingZeroes = function (n) {
  return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));

  // let ans =0;
  // while(Math.floor(n/5) >= 1){
  //     ans+=Math.floor(n/5);
  //     n = Math.floor(n/5);
  // }
  // return ans ;
};
// console.log(trailingZeroes(30));

// * - [ ] Find if the given number is palindrome // set in an array then check using two pointers ;
// if not allowed to convert into string than make a reverse interger than equate n to reverse interger

function isNumberPalindrome(n) {
  let num = String(n);
  let arr = num.split("");
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// console.log(isNumberPalindrome(101));
function isNumberPalindromeReverse(n) {
  let temp = n;
  let reverse = 0;
  while (temp >= 1) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse;
}
// console.log(isNumberPalindromeReverse(161416));

// * - [ ] Find if the given string is a palindrome

//"amanaplanacanalpanama -> true
//A man, a plan, a canal: Panama ; do ignore comma space and :\ -> true
//"0P" -> false
function isAplhaNum(str) {
  //true for comma , space , : or ;

  if (str === " ") {
    return false;
  } else if ((str >= 0 && str <= 9) || (str >= "a" && str <= "z")) {
    return true;
  } else return false;
}

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  str = str.toLowerCase();
  while (i <= j) {
    if (!isAplhaNum(str[j])) {
      j--;
    } else if (!isAplhaNum(str[i])) {
      i++;
    } else if (str[i] !== str[j]) {
      return false;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    }
  }

  return true;
}
// console.log(isPalindrome("0P0"));

//* - [ ] Find Gcd of two numbers
/* 
Given 2 numbers a and b, you have to find the gcd of these 2 numbers using recursion.
Sample Input 1

2
8 20  ; 8= 2*2*2 ; 20 = 2*2*5 so ( 2*2 )
80 80 ; 

Sample Output 1

4
80

Explanation :The gcd of 8 & 20 is 4 as 4 is the greatest number that divides both 8 & 20. 
*/
//Euclids Algorithm

function gcdRecursive(a, b) {
  if (b === 0) return a;
  else return gcdRecursive(b, a % b); // aise bhi hojayga , it automatically shift positions;

  /* 
if(b==0) return a ;
if(a==0) return b;
if(a>=b) return gcdRecursive(b,a%b);
else return gcdRecursive(a,b%a);


*/
}
// console.log(gcdRecursive(20, 15));

function gcd(a, b) {
  let low = Math.min(a, b);
  let j = 1;
  let ans = 1;
  for (let i = 0; i <= low; i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;

  if (!a || !b) return 0;
  let map1 = new Map();
  let map2 = new Map();
  while (a > 1) {
    for (let i = 2; i <= 9; i++) {
      if (a % i === 0) {
        map1.set(i, (map1.get(i) || 0) + 1);
        a = a / i;
        break;
      }
    }
  }
  let anss = 1;
  while (b > 1) {
    for (let i = 2; i <= 9; i++) {
      if (b % i === 0) {
        map2.set(i, (map2.get(i) || 0) + 1);
        b = b / i;
        if (map1.has(i)) {
          anss *= i;
          if (map1.get(i) === 1) map1.delete(i);
          else map1.set(i, map1.get(i) - 1);
        }
        break;
      }
    }
  }
  return anss;
}
// console.log(gcd(20, 10));

//todo: - [ ] Remove Duplicates From sorted Array ,
//Given a sorted array, remove all duplicates such that each element occurs at most once in the array. Return the length of the modified array.
//return length of the final nums array

//O(n + n) =O(2n) = O(n)
function removeDuplicatesFromSortedArray(nums) {
  let n = nums.length - 1;
  let map1 = new Map();
  nums.forEach((e) => {
    map1.set(e, (map1.get(e) || 0) + 1);
  });

  let iterator = map1.keys();

  for (let i = 0; i < map1.size; i++) {
    nums[i] = iterator.next().value;
  }

  for (let i = 0; i <= n - map1.size; i++) {
    nums.pop();
  }
  return nums.length;
}
// let godOfwar = [2, 4, 4, 4, 6, 8, 8];
let godOfwar = [1, 2];
// console.log(removeDuplicatesFromSortedArray(godOfwar));

//O(n) ;
function removeDuplicatesFromSortedArrayWhile(nums) {
  let i = 0;
  while (i <= nums.length - 1) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
    i++;
  }
  return nums.length;
}
// console.log(removeDuplicatesFromSortedArrayWhile([1, 1, 2]));

//O(n);
function removeDuplicatesFromSortedArrayOptimal(nums) {
  let n = nums.length;
  let i = 0;
  let j = 1;
  while (j < n) {
    if (nums[j] != nums[i]) {
      nums[i + 1] == nums[j];
      i++;
    }
    j++;
  }
  return i + 1; // returning the length; not shortening the array nums still the length is n ;
}
// console.log(removeDuplicatesFromSortedArrayOptimal([1, 1, 2]));

// ! - [ ] Merge sorted Array

//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 , Output: [1,2,2,3,5,6]

// **using extra space ; O(m+n)
function mergeSortedArray(nums1, m, nums2, n) {
  let ans = [];
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      ans[k--] = nums1[i--];
    } else ans[k--] = nums2[j--];
  }
  while (i >= 0) {
    ans[k--] = nums1[i--];
  }
  while (j >= 0) {
    ans[k--] = nums2[j--];
  }

  return ans;
}

//assume nums1 = [x,x,x...x,0,0,0,..0] ; x representing elements(n) of nums1, and 0 represent numbers of elements(m) to be filled in nums1 of nums2;
// traverse from back ;
// * no extra space
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else nums1[k--] = nums2[j--];
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 4, 5, 6],
  n = 4;
/*Output: [1,2,2,3,5,6] */

// console.log(merge(nums1, m, nums2, n));
// console.log(mergeSortedArray(nums1, m, nums2, n));

//!  - [ ] Find diagonal Sum
// Given an matrix of dimension n*n. Find the sum of elements present at principal diagonal of the matrix.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
// var matrix = [
//   [1, 2, 3, 4],
//   [1, 2, 4, 5],
//   [2, 3, 3, 4],
//   [1, 1, 2, 3],
// ];
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function diagonalSum(mat) {
  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (i == j) {
        ans += mat[i][j];
      }
      if (i + j === mat.length - 1) {
        ans += mat[i][j];
      }
    }
  }
  let index = Math.floor(mat.length / 2);
  if (mat.length % 2 !== 0) {
    ans = ans - mat[index][index];
  }
  return ans;
}

// console.log(diagonalSum(matrix));

function diagonalSumOptimal(mat) {
  let n = mat.length; // take square matrix ;
  let ans = 0;
  let i = n;
  let j = n;
  while (i > 0) {
    ans += mat[i - 1][j - 1];
    i--, j--;
  }
  i = 0;
  j = n;

  while (i <= n - 1) {
    ans += mat[i][j - 1];
    i++;
    j--;
  }

  let index = Math.floor(mat.length / 2);
  if (mat.length % 2 !== 0) {
    ans = ans - mat[index][index];
  }

  return ans;
}
// console.log(diagonalSumOptimal(matrix));

// ! - [ ] Rotate the Array to the Right by k steps // arrays m kiya tha vo galat h leetcode par check karo ;
//  Given an array, rotate the array to the right by k steps, where k is non-negative.
// n is length of array , k is the steps , and nums is the array ;
// INput : 1 2 3 4 5 6 7 : output : 5 6 7 1 2 3 4

function rotateArrayIndex(arr, startIdx, endInx) {
  while (startIdx < endInx) {
    [arr[startIdx], arr[endInx]] = [arr[endInx], arr[startIdx]];
    startIdx++;
    endInx--;
  }
  return arr;
}

function rotateArray(k, nums) {
  let n = nums.length;
  k = k % n;
  if (k === 0) return nums;

  nums = rotateArrayIndex(nums, n - k, n - 1); // peche se check karenge ;
  nums = rotateArrayIndex(nums, 0, n - k - 1);
  nums = rotateArrayIndex(nums, 0, n - 1);
  return nums;
}

// console.log(rotateArray(2, [-1, -100, 3, 99]));

//! - [ ] find the sum of minimum and maximum element

//Given an array A of size N of integers. Your task is to find the sum of the minimum and maximum elements in the array.
// similar question on leetcode :
//2091. Removing Minimum and Maximum From Array

let godxilla = [-2, 1, -4, 5, 3];

function maxMin(arr) {
  let n = arr.length;
  let i = 1;
  let max = arr[0];
  let min = arr[0];
  while (i < n) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    i++;
  }
  return max + min;
}
// console.log(maxMin(godxilla));

var minimumDeletions = function (nums) {
  if (nums.length == 1) return 1;
  let n = nums.length;
  let i = 1;
  let max = nums[0];
  let min = nums[0];
  while (i < n) {
    if (nums[i] > max) max = i;
    if (nums[i] < min) min = i;
    i++;
  }
  return { max, min };
  let one = Math.min(max + 1, n - max);
  let two = Math.min(min + 1, n - min);

  return one + two;
};
// console.log(minimumDeletions(godxilla));

//! - [ ] Write a function that reverse an array

let revArr = [5, 12, 5, 1, 8];

// tc : O(n/2) and sc : O(1) ;
function reverseArray(n, arr) {
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

// console.log(reverseArray(5, revArr));

//!- [ ] Find if the given two strings are a valid anagram
//Given two strings s and t, write a function to determine if t is an anagram of s.

// Note: You may assume the string contains only lowercase alphabets.
function validAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  s = s.toLowerCase();
  t = t.toLowerCase();
  let n = s.length;
  let myMap = new Map();
  for (let i = 0; i < n; i++) {
    myMap.set(s[i], (myMap.get(s[i]) || 0) + 1);
  }
  // return myMap;
  for (let i = 0; i < n; i++) {
    if (myMap.has(t[i])) {
      myMap.set(t[i], myMap.get(t[i]) - 1);
    }
    if (myMap.has(t[i]) && myMap.get(t[i]) === 0) {
      myMap.delete(t[i]);
    }
  }

  return !myMap.size ? true : false;
}

// console.log(validAnagram("aacc", "ccac"));

// ! - [ ] Find if the given string is a valid parenthesis
// Given a string S containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function (s) {
  let arr = [];
  let i = 0;

  while (i < s.length) {
    if (s[i] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (s[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if (s[i] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else arr.push(s[i]);
    i++;
  }
  // return arr;
  return arr.length ? false : true;
};

console.log(isValid("{[(}])"));
console.log(isValid("([{}])"));
