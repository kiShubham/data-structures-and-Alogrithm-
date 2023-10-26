/** a function calling itself  until the base case return something(boolean or value) */

/* 
!Q.print all the permutation of a string or array ;
Given an array nums of distinct integers, return all the possible permutations.
You can return the answer in any order.
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

// eg. for recursion ;

function gotoLunch(person) {
  if (person === 5) return true;
  console.log(person);
  gotoLunch(person + 1);
}
// gotoLunch(1);

//convert a normal fn into a recursive fn ;

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
// console.log(multiply([1, 2, 3, 4]));

// now convert it into a recursive function ;

function multiplyRecursive(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  }
  let firstElement = arr[0];
  arr.shift();
  return firstElement * multiplyRecursive(arr);
}

// function multiplyRecursive(arr) {
//   console.log(arr);
//   if (arr.length <= 0) {
//     return 1;
//   }
//   return arr[arr.length - 1] * multiplyRecursive(arr.slice(0, arr.length - 1));
// }

// console.log(multiplyRecursive([1, 2, 3, 4]));

// Todo:  dsa question :very easy for concept building

/***
 * ! factorial of a number
 *
 */
const factorial = (n) => {
  if (!n) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

/**
 *!range of numbers : create an array with range of numbers from startNum to endNum ;
 (0,5) return a array like : [0,1,2,3,4,5]
 */

const rangeOfNumbers = (startNum, endNum) => {
  if (startNum > endNum) {
    return [];
  }
  const number = rangeOfNumbers(startNum, endNum - 1);
  number.push(endNum);
  return number;
};

// console.log(rangeOfNumbers(0, 5));

/**
 * !given integer x, return true if x is a palindrome, and false otherwise ;
 * * Input : x = 121 ;---> output  : true  ;
 * * Input : x = 543 ;---> output  : false ;
 */

const isPalindrome = (num) => {
  let str = num.toString();
  if (num < 0) return false;
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
};

// console.log(isPalindrome(101));
/**
 * ! Fibonnaci Numbers
 * fibonacci series :0,1,1,2,3,5,8,13,21,34,55,89,144,233 ...
 * f(0) = 0 ; f(1) = 1;
 * f(n) = f(n-1) + f(n-2) for n > 1 ;
 *  Input: n = 3 ---> output: 2 ;
 */
function fibonnaciRecursion(n) {
  if (n <= 1) return n;
  return fibonnaciRecursion(n - 1) + fibonnaciRecursion(n - 2);
}

// console.log(fibonnaciRecursion(5)); // 5

const fibo = (n) => {
  let i = 0;
  let j = 1;
  let ans = [i, j];
  for (let k = 0; k <= n; k++) {
    ans.push(i + j);
    let temp = i;
    i = j;
    j = temp + j;
  }
  return ans;
};

// console.log(fibo(5)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]

/**
 * ! Reverse The string ;
 * * Input : "Hello" ==> "olleH" ;
 *
 */

const reverseString = (string) => {
  if (!string.length) return "";
  return reverseString(string.substr(1)) + string[0];
};
// console.log(reverseString("hello"));

/**
 * Q.6 Subsets (Backtracking Algorithm using Recursion )
 * Given an Integer array nums of unique elements, return all possible Subsets (the power of set)
 * Input : [1,2,3] -->output :[[],[1],[1],[2],[3],[1,3],[2,3],[1,2],[1,2,3]] ;
 * input : [0]  ---> output : [[],[0]] ;
 */
