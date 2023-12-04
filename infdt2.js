/*

*- [ ] Search Target ; linear seach ,then optimise using binary search ;
- [ ] sort an array ! apply merge sort ;
*- [ done in infdt1  14.] longest common prefix
- [ ] search in a rotated sorted array 
- [ ] find intersection of two arrays
- [ ] find first position in sorted array; save karo aur left move karo  
*- [ ] Nth Fibonacci number 
*- [ 48 ] rotate image / matrix
* - [ 121. ,122 . ] Best time to buy and sell stocks 
- [ ] power of two 
*- [ 54 ] spiral matrix
*- [ 283 ] move Zeros to Right
!Find Triplet with maximum sum in unsorted Array 
!merge sort
*/

// !- [ ] Search Target

// Given a sorted array of N distinct integers and a target value X, return the index if the target is found.
//  If not found then return -1.
// N:length of array  ; A:array ; x:target
// apply binary search optimal ;
function searchTarget(n, arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) r = mid - 1;
    else if (arr[mid] < x) l = mid + 1;
  }
  return -1;
}

let arr = [9, 7, 8, 6, 4, 2];
// console.log(searchTarget(arr.length, arr, 8));

// - [ ] Nth Fibonacci number
/* 
Given a number n, you have to find the nth fibonacci number. The fibonacci sequence is given as 0,1,1,2,3,5,8,...
where 0 and 1 are the 0th and 1st fibonacci number respectively.
*/
function nthFibonacciNumber(n) {
  if (n == 0 || n == 1) return n;
  let res = 0;
  let one = 0;
  let two = 1;

  for (let i = 2; i <= n; i++) {
    res = one + two;
    let temp = one;
    one = two;
    two += temp;
  }
  return res;
}
// console.log(nthFibonacciNumber(6));

function nthFibonacciNumberRecursion(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else
    return (
      nthFibonacciNumberRecursion(n - 1) + nthFibonacciNumberRecursion(n - 2)
    );
}

// console.log(nthFibonacciNumberRecursion(5));

// !  - [ ] rotate image / matrix
// You are given an n x n 2D matrix representing an image.Rotate the image by 90 degrees (clockwise).

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//assuming arr is square matrix ;
// using extra space
function rotateMatrixBrute(arr) {
  const n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - 1 - i] = arr[i][j];
    }
  }
  return ans;
}
// console.log(rotateMatrixBrute(matrix));

// not using extra space
function rotateMatrix(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (j != i) {
        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      }
    }
  }
  arr.forEach((element) => {
    element.reverse();
  });
  return arr;
}

// console.log(rotateMatrix(matrix));

//!121. Best Time to Buy and Sell Stock , buy only one time
//You want to maximize your profit by choosing a "single day "to buy one stock and choosing a "different day "in the future to sell that stock.
let stocks = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  const n = prices.length;
  let min = prices[0];
  let maxProfit = 0;
  let i = 1;
  while (i < n) {
    let currProfit = prices[i] - min;
    maxProfit = Math.max(maxProfit, currProfit);
    min = Math.min(prices[i], min);
    i++;
  }
  return maxProfit;
};

// console.log(maxProfit(stocks)); // 5 /one time buy and one time sell ;

//! - [ 122] Best time to buy and sell stocks II, buy multiple times
//On each day, you may decide to buy and/or sell the stock.
//You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

function bestTimeToBuyAndSellStocks(prices) {
  const n = prices.length;
  let buy = prices[0];
  let profit = 0;
  let i = 0;
  while (i < n) {
    if (buy >= prices[i]) {
      buy = prices[i];
    } else if (buy < prices[i]) {
      profit += prices[i] - buy;
      buy = prices[i];
    }
    i++;
  }
  return profit;
}
// console.log(bestTimeToBuyAndSellStocks(stocks)); // 7 ; buy multiple times and sell  ;

function bestTimeToBuyAndSellStocks2ndWay(prices) {
  let profit = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      profit = prices[i] - prices[i - 1] + profit;
    }
  }
  return profit;
}

//! - [ ] power of two
//Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
function powerOfTwo(n) {
  if (n == 1) return true; // 2^0 = 1
  else if (n == 0) return false;

  let flag = true;

  while (n) {
    if (n == 2) return true; //or return flag

    let temp = n / 2;
    if (temp % 2 != 0) {
      flag = false;
      return false;
    }
    n = n / 2;
  }
}
// console.log(powerOfTwo(10));
function powerOfTwo2nd(n) {
  if (n <= 0) return false;
  while (n % 2 == 0) {
    n = n / 2;
  }
  return n == 1;
}
// console.log(powerOfTwo2nd(8192));

//! - [ ] spiral matrix
let mat = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

function spiralMatrix(arr) {
  let n = arr.length; //assuming square matrix ;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let ans = [];
  let i = 0;
  while (left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;
    if (bottom >= top)
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
    bottom--;
    if (left <= right)
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
    left++;
  }
  return ans;
}
/* console.log(spiralMatrix(mat));
console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
); */

//! - [ ] move Zeros to Right
// Given an array A, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0] ;
function moveZeros(arr) {
  const n = arr.length;
  let i = 0,
    j = 1;
  while (j < n && i <= j) {
    if (arr[i] == 0 && arr[j] != 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    } else if (arr[i] != 0 && arr[j] != 0 && i == j) {
      i++;
      j++;
    } else if (arr[j] == 0) {
      j++;
    } else if (arr[i] != 0) {
      i++;
    }
    console.log(i, j);
  }
  return arr;
}
var moveZeroes2nd = function (nums) {
  let n = nums.length;
  let i = 0;
  let j = 1;
  while (j < n) {
    if (nums[j] !== 0 && nums[i] === 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    }
    if (nums[i] !== 0) i++;
    j++;
  }
  return nums;
};

/* console.log(moveZeros([1, 2, 3, 0, 0, 4]));
console.log(moveZeros([0, 1, 0, 3, 12, 0]));
console.log(moveZeros([0]));
 */

var search = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let pivot, mid;
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
  /* while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      pivot = mid;
      break;
    } else if (arr[mid] < arr[r]) {
      // save mid && search left of mid
      pivot = mid;
      r = mid - 1;
    } else if (arr[mid] > arr[r]) {
      //search right of mid
      l = mid + 1;
    } else if (l === r) {
      if (arr[mid] < arr[mid + 1]) pivot = mid; //left most
      else if (arr[mid] < arr[mid - 1]) pivot = mid; // right most;
      break;
    }
  } */
  return pivot;
};
let rr = [6, 7, 0, 1, 2, 4, 5];
// console.log(search([4, 5, 6, 7, 0, 1, 2]));
console.log(search(rr));
