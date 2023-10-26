function findFactorial(n) {
  if (n === 0) return 1;
  return n * findFactorial(n - 1);
}

// console.log(findFactorial(500));
function factorialDigitSum(n) {
  let factorial = findFactorial(n);
  let sum = 0;
  while (factorial !== 0) {
    let num = factorial % 10;
    sum += num;
    factorial = Math.floor(factorial / 10);
  }
  return sum;
}

function sum_of_digits_factorial(n) {
  // declaring a variable fact as bigInt.
  let fact = BigInt(1);

  // compute the factorial of a given number.
  for (let i = 2n; i <= BigInt(n); i++) {
    fact *= i;
  }

  // set sum of digits as zero.
  let sum_of_digits = 0;
  for (const digit of fact.toString()) {
    sum_of_digits += parseInt(digit);
  }
  return sum_of_digits;
}

// Example usage
// console.log(sum_of_digits_factorial(10));
// console.log(sum_of_digits_factorial(50000));
// console.log(factorialDigitSum(500));

// The code is contributed by Arushi Goel.
// console.log(BigInt(500));

function twoSum(nums, target) {
  let n = nums.length;
  let l = 0,
    r = n - 1;

  let arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
  }
  arr.sort((a, b) => a - b);
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum < target) l++;
    else if (sum > target) r--;
    if (sum === target) break;
  }
  let x,
    y = 0;
  for (let i = 0; i < nums.length; i++) {
    if (arr[l] === nums[i]) x = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (arr[r] === nums[i] && i !== x) y = i;
  }
  return [x, y];
}
// console.log(twoSum1([4, 2, 7, 11, 15, 9], 6));

function longestCommonPrefix(strs) {
  let ans = "";
  let arr = strs[0].split("");
  let l;
  let j = 1; // array item pointer ;

  while (arr.length > 1 || j < strs.length) {
    l = arr.length - 1;
    if (strs[j][l] !== undefined) {
      if (arr[l] === strs[j][l]) l--;
      else if (arr[l] !== strs[j][l]) {
        arr.splice(l);
        j++;
      }
    } else arr.splice(l);
  }

  return arr;
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); //not working ;

// Javascript program to find sum of digits in factorial
// of a number

// Function to multiply x with large number
// stored in vector v. Result is stored in v.
function multiply(x, arr) {
  let carry = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    // Calculate res + prev carry
    let res = carry + arr[i] * x;

    // updation at ith position
    arr[i] = res % 10;
    carry = Math.floor(res / 10);
  }
  while (carry != 0) {
    arr.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
}

// Returns sum of digits in n!
function findSumOfDigits(n) {
  let arr = [];
  arr.push(1); // adds 1 to the end

  // One by one multiply i to current vector
  // and update the vector.
  for (let i = 1; i <= n; i++) multiply(i, arr);

  // Find sum of digits in vector v[]
  let sum = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) sum += arr[i];
  return sum;
}

// Driver code
let n = 100;
// console.log(findSumOfDigits(n));

// This code is contributed by avanitrachhadiya2155
let str = "hi";
str += "k";
// console.log(str);

function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  if (strs.length == 0) return strs[0];
  let prefix = "";
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== first[i] || strs[j][i] === undefined) {
        flag = false;
      }
    }
    if (flag === true) prefix += first[i];
  }
  return prefix;
}
let arr = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(arr));

function reverseWordsInAString(s) {
  if (s.length == 1) return s;
  let arr = s.split(" ");
  let ans = "";
  let n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    if (i == 0) {
      ans += arr[i];
    } else ans += arr[i] + " ";
  }
  return ans;
}
console.log(reverseWordsInAString("hello world"));
