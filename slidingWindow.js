/* 
? how to identify that we need to use sliding window :

 * array or string question ;
 * subarray or substring will be asked ;
 * and they ask largest/maximum/minimum/smallest sum or something;
 * k window size given or k is asked ;
 

? types of sliding window : 

TODo: twotype :
TODo: 1. fixed size k given ;
TODo: 2. variable size window ;k may be asked with certain condition ;

^^ ,
^     ^
? Types of Questions :

!fixed : 
1.  max/min sub Array of size k ;
2.  1st -ve in every window size of k ;
3.  count occurence of anagram ;
4.  maximim of all subarray of size k ;
5.  maximum of minimum of every window size ;

!variable :
6.  largest /smallest subarray of sum k ;
7.  largest sub-string with k distinct character ;
8.  length of largest sub string with no repeating characters ;
9.  pick toy ;
* 10.  Minimum window substring ;leetcode hard ; 


*/
// ! 1.  max/min sum of sub Array of size k : ( maximum )

let arr = [2, 5, 1, 8, 2, 9, 1];

function maxSubArrayofK(arr, k) {
  const n = arr.length;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = 1; i <= n - k; i++) {
    sum = sum - arr[i - 1] + arr[i + 2];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
// console.log(maxSubArrayofK(arr, 3)); //19

/* 
we will use 2 pointers to represent the window ;
[ 2, 5, 1, 8, 2, 9, 1 ]
  ^     ^   
  i     j 

  so here window size , k = j - i + 1 ;

*/
function maxSubArrayofKPointers(arr, k) {
  const n = arr.length;
  let sum = 0,
    max = 0,
    i = 0,
    j = 0;
  while (j < n) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      // trying to attain the window size
      j++;
    } else if (j - i + 1 === k) {
      // as we have attain window size now do
      if (sum > max) max = sum;
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return max;
}
// console.log(maxSubArrayofKPointers(arr, 3)); // 19

/* 
! 2.  1st -ve integer in every window size of k ;
for the negArr in starting 2 windows of any size first negative no. -1 ;
ans should be an array probably [-1,-1 ...]
*/

let negArr = [12, -1, -7, 8, -15, 30, 16, 28];

function firstNegNum(arr, k) {
  const ans = [];
  const temp = [];
  const n = arr.length;
  let i = 0,
    j = 0;
  while (j < n) {
    if (arr[j] < 0) {
      temp.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (temp.length) {
        ans.push(temp[0]);
      } else ans.push(0);
      if (arr[i] === temp[0]) temp.shift(); // O(n)
      i++;
      j++;
    }
  }
  return ans;
}
// console.log(firstNegNum(negArr, 3));// [ -1, -1, -7, -15, -15, 0 ]
// tc  - O(n2) ;

/* 
! 3. count occurence of anagram ;
  anagram of "for"->"rfo","fro",rof,fro,orf,ofr ;number of combinations
  let str = "forfdfldforfdferooierof"
             ___     ___         ___
              ___     ___
  so their are 5 anagram ; 
*/

/* 
!4.  maximim of all subarray of size k ;
brute force - double loop inside loop should upto i+k ;

*be terrified of failing

*/
// const maxInArray = [1, 3, -1, -3, 5, 3, 6, 7];
const maxInArray = [1, -1, 1, -1, -1, -1, -3, -6, -9];
//o/p = [3,3,5,5,6,7]

function maxInSubArray(arr, k) {
  let max = [arr[0], 0];
  let ans = [];
  let i = 0,
    j = 0;
  let n = arr.length;
  while (j < n) {
    if (arr[j] > max[0]) {
      max[0] = arr[j];
      max[1] = j;
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      ans.push(max[0]);
      if (max[1] === i) {
        max[0] = arr[i + 1];
      }
      i++;
      j++;
    }
  }
  return ans;
}
// wrong solution
console.log(maxInSubArray(maxInArray, 3)); //[ 3, 3, 5, 5, 6, 7 ]
