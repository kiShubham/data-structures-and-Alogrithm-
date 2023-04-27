// # 1 ---------------{}next larger element aka next greater to Right --------------

/**
 * i/o -> let arr = [1,3,2,4]
 * O/P -> ans = [3,4,4,-1] , -1 if any greater element is not available ;
 */

// let arr = [3, 0, 0, 1, 2, 4];

// bruteforce
/*
let ans = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      ans.push(arr[j]);
      break;
    }
  }
  {
    ///cases for arr[i] = 4
    console.log(ans[i] == null); //true ;
    console.log(ans[i] === null); //fasle ;
    console.log(ans[i] == undefined); //true ;
    console.log(ans[i] === undefined); //true ;
    console.log(!ans[i]); //true
  }
  if (!ans[i]) {
    ans.push(-1);
  }
}

console.log(ans);
*/
let arr = [3, 0, 0, 1, 2, 4];

//apply stacks concept ;
