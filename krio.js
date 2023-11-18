let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, x) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  let mid, ans;
  if (l === r && arr[r] === x) {
    return r;
  }
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      ans = mid;
      return ans;
    } else if (arr[mid] > x) {
      r = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    }
  }
  return -1;
}
// console.log(binarySearch(arr1, 5));

//s - start index , e - end index
function binarySearchIdx(arr, s, e, x) {
  let n = arr.length;
  let l = s;
  let r = e;
  let mid, ans;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === x) {
      ans = mid;
      return ans;
    } else if (arr[mid] > x) {
      r = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearchIdx(arr1, 1, 5, 3));

function pivot(arr) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  let pivot, mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      pivot = mid;
      break;
    } else if (arr[mid] < arr[r]) {
      //search left
      pivot = mid;
      r = mid - 1;
    } else if (arr[mid] > arr[r]) {
      //search right
      l = mid + 1;
    } else if (l === r) {
      pivot = mid;
      break;
    }
  }
  return pivot;
}
let array = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

// console.log(pivot(array));

//two condition : pivot is either 0 or any other num ;
function searchInRotatedSortedArrayOne(arr, target) {
  let n = arr.length;
  let minNumber = pivot(arr);

  let first = 0;
  let last = n - 1;
  let ans;

  if (target <= arr[last]) {
    ans = binarySearchIdx(arr, minNumber, last, target);
  } else if (target >= arr[first]) {
    ans = binarySearchIdx(arr, first, minNumber, target);
  } else if (target > arr[last] && target < arr[first]) {
    return -1;
  }

  return ans;
}
// console.log(searchInRotatedSortedArrayOne(array, 7));
let on = [4, 5, 6, 7, 0, 1, 2];
// console.log(searchInRotatedSortedArrayOne(on, 3));
let onn = [1, 3];
// console.log(searchInRotatedSortedArrayOne(onn, 3));

function peakElement(arr) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  let mid, peak;
  console.log(l === r);
  if (l === r) return 0; //[x] we have to return index ;
  else if (n === 0) return -1; //[]

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      peak = mid;
      break;
    } else if (arr[mid] > arr[mid + 1] && mid === 0) {
      peak = mid;
      break;
    } else if (arr[mid] > arr[mid - 1] && mid === n - 1) {
      peak = mid;
      break;
    } else if (arr[mid + 1] > arr[mid]) {
      l = mid + 1;
    } else if (arr[mid - 1] > arr[mid]) {
      r = mid - 1;
    }
  }
  return peak;
}
console.log(peakElement([1]));

function peakOptimised(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
