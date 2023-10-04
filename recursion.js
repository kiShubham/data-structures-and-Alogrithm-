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
gotoLunch(1);
