let num = 10;
// console.log(num % 1);
function naiveCountPrime(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 2; j <= i / 2; j++) {
      if (i % j !== 0) {
        res += 1;
        console.log(i + "<-i");
        break;
      }
    }
  }
  return res;
}
// console.log(countPrimes(num));
function factorialBasic(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
    console.log("res-->" + res);
  }
  return res;
}
// console.log(factorialBasic(5));

let matrix = [
  [1, 2, 3, 4],
  [1, 2, 4, 5],
  [2, 3, 3, 4],
  [1, 1, 2, 3],
];
// ! sum of diagonal element;
function diagonalSum(n, matrix) {
  //sQuare matrix
  let i = n;
  let j = n;
  let res = 0;
  while (i > 0) {
    res += matrix[i - 1][j - 1];
    i--, j--;
  }
  return res;
}
// console.log(diagonalSum(4, matrix));
const dup = [2, 4, 4, 4, 6, 8, 8, 8];
// const dup = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// return length;one element once only;
function removeDuplicatesFromSortedArray(arr) {
  // extra space used
  /* let p = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      res[p] = nums[i];
      p++;
    }
  }
  return res;
*/
  // no extra space used
  let n = arr.length;
  let p = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[p] = arr[i];
      p++;
    }
  }
  arr[p] = arr[n - 1];

  return arr;
}
// console.log(removeDuplicatesFromSortedArray(dup));

function secondryDiagonal(n, matrix) {
  let i = 0;
  let j = n - 1;
  let res = 0;
  while (i < n) {
    res += matrix[i][j];
    i++, j--;
  }
  return res;
}
// console.log(secondryDiagonal(4, matrix));

function gcd(a, b) {
  let j = 1;
  let ans = 1;
  for (let i = 0; i <= a; i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}
// console.log(gcd(80, 80));
let s = "abs";
s = s + "h";
// console.log(s);
function reverseString(s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    ans.push(s[i]);
  }
  let l = "";
  for (let j = ans.length - 1; j >= 0; j--) {
    l = l + ans[j];
  }
  return l;
}
// console.log(reverseString("abc"));
let string = "564" * 1;
// console.log(typeof string);

function palindromeNumber(x) {
  let string = x.toString();
  let arr = string.split("");
  string = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    string = string + arr[i];
  }
  // console.log(num);
  if (x / string === 1) return true;
  return false;
}
// console.log(palindromeNumber(121));

function reverseArray(n, arr) {
  // length is even or odd ;

  let middle = Math.floor((arr.length - 1) / 2);

  if (n % 2 !== 0) {
    let j = 1;
    for (let i = middle; i > 0; i--) {
      let temp = arr[middle - j];
      arr[middle - j] = arr[middle + j];
      arr[middle + j] = temp;
      j++;
    }
  } else {
    let j = 1;
    for (let i = 0; i <= middle; i++) {
      let temp = arr[i];
      arr[i] = arr[n - j];
      arr[n - j] = temp;
      j++;
    }
  }
  return arr;
}
// console.log(reverseArray(6, [5, 12, 9, 1, 8, 7]));
// [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < middle; i++) {
//   // starting from middle exchange the adjactent number of middle;
//   //["a","b","c"];here b is the middle number and by exchanging a and c by eachother the array will be reversed
// }
function capitaliseBasic(paragraph) {
  let nextletterCap = false;
  let ans = paragraph.charAt(0).toUpperCase();
  for (let i = 1; i < paragraph.length; i++) {
    if (nextletterCap === true) {
      ans = ans + paragraph.charAt(i).toUpperCase();
    } else {
      ans = ans + paragraph.charAt(i);
    }
    if (paragraph.charAt(i) == " ") {
      nextletterCap = true;
    }
    if (paragraph.charAt(i) !== " ") {
      nextletterCap = false;
    }
  }
  return ans;
}
let string1 = "the quick Brown fox jumps over The lazy dog.";
// console.log(capitaliseBasic(string1));
// (tc = O(n)), (sc = O(n));

// string1.charAt(1) = "l";
// console.log(string1);

/*
 * prime no. less than n ; 
 ! very important regarding time Complexity
 */

// ? naive approach ; two loop ;

function naiveCountPrime(n) {
  let count = [];
  if (n < 2) return 0;

  for (let i = 2; i < n; i++) {
    let bool = true; //let i is prime ;
    if (i === 2) bool = true; // 2 is prime ;
    else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        // loop not starting from 1 as 1 is divisible by every num ;
        if (i % j == 0) {
          bool = false; // i is not prime as its divisble ;
        }
      }
    }
    if (bool === true) count.push(i);
  }

  return count;
}

/* 
console.log(naiveCountPrime(10)); //  2 3 5 7
console.log(naiveCountPrime(5)); //  2 3
console.log(naiveCountPrime(15)); //  2 3 5 7 11 13
console.log(naiveCountPrime(50)); //  2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
 */
// let h = Math.sqrt(25);
// console.log(h);

// ? reduce timeCOmplexity ;
//* seiveTube erathosnese alogrithm ;

function seivePrimeno(n) {
  let count = [];
  let boolArray = [];
  for (let i = 0; i <= n; i++) boolArray.push(true); // [ true, true, true, true, true,.... true ] length n+1 ;
  //
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (boolArray[i]) {
      for (let j = 2 * i; j <= n; j = j + i) {
        /// sare multiple of 2 {i} ko false kar do ;
        boolArray[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (boolArray[i]) {
      count.push(i);
    }
  }
  return count;
}
// console.log(seivePrimeno(113)); //  [ 2, 3, 5]
/* 
! primeno . in a range ;
 */
function numberOfPrimesInARange(l, r) {
  let count = [];
  let boolArray = [];
  for (let i = 0; i <= r; i++) boolArray.push(true);
  for (let i = 2; i <= Math.sqrt(r); i++) {
    if (boolArray[i]) {
      for (let j = 2 * i; j <= r; j = j + i) {
        /// sare multiple of 2 {i} ko false kar do ;
        boolArray[j] = false;
      }
    }
  }
  for (let i = l; i <= r; i++) {
    if (boolArray[i]) {
      count.push(i);
    }
  }
  return count.length;
}
// console.log(numberOfPrimesInARange(98, 113));

let nums = [1, 2, 3, 4, 5, 6, 7];

//by one place
function rotateArrayLeftonePlace(n, arr) {
  let temp = arr[0];
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i + 1];
    if (i === n - 1) arr[i] = temp;
  }
  return arr;
}
// console.log(rotateArrayLeftonePlace(7, nums));

/*
 ! Q. rotate the array left by d places ;

? brute force timecomplexity -> O(k)+O(n-k)+(k) => O(n+k);
? space -> using temp to store k terms -> O(k);

?OPtimal solution to get rid of O(d) space ;
rotate [123] and [4567]=> [3,2,1,7,6,5,4] ; 
now rotate full array => [4,5,6,7,1,2,3] ;if k = 3 ; shifting right ;
 ? means  reverse(a(0th index),a+k); tc-> O(k)
          reverse(a+k,a+n); tc->O(n-k)
          reverse(a,a+n); tc->O(n); -> total tc-> O(2n) 
          sc-> not using any extra space just using existing array ; 
 */
function rotateArrayLeftByK(n, k, arr) {
  k = k % n;
  let temp = [];
  let j = 0;
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]); // [1,2,3] storing in temp ;
  }
  for (let i = 0; i < n - k; i++) {
    arr[i] = arr[i + k];
  }
  /*  for (let i = n - k; i < n; i++) {
    arr[i] = temp[j];
    j++;
  } */ // dont use j ;
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)]; // initially i-{n-k} =0 ; then 1 then 2 ;
  }
  return arr;
}
// console.log(rotateArrayLeftByK(7, 9, nums));

function rotateArrayRight(n, k, arr) {
  k = k % n;
  let temp = [];
  let j = 0;
  for (let i = n - k; i < n; i++) {
    temp.push(arr[i]);
  }
  // console.log(temp);
  // temp;-> [ 5, 6, 7];
  for (let i = n - 1; i >= k; i--) {
    arr[i] = arr[i - k];
  }
  // console.log(arr);
  // [1,2,3,1,2,3,4]
  for (let i = 0; i < k; i++) {
    arr[i] = temp[j];
    j++;
  }

  return arr;
}
// console.log(rotateArrayRight(7, 9, nums));
function reverseArray(arr, i, j) {
  arr.reverse();
}

var js = (function (x) {
  return x * x;
})(10);
// console.log(js); //iife functions
let j = 10;
j *= 5;
console.log(j);
