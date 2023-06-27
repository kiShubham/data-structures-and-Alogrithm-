let num = 10;
// console.log(num % 1);
function countPrimes(n) {
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

string1.charAt(1) = "l";
console.log(string1);
