/*   
todo: 1Q. print spiral matrix ;
todo: 2Q. Rotate the matrix ;
todo: 3Q. set Matrix Zero's
todo: 4Q. 59. Spiral Matrix II
*/
const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
/*
 * timecomplexity > we are push every element so O(m*n) and we are storing it so space is same O(m*n);
                             ! 1Q. print spiral matrix ;
 */

function SpiralMatrix(matrix) {
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let res = [];

  // if matrix is 1D ;
  if (!right) {
    for (let i = 0; i <= matrix.length - 1; i++) {
      res.push(matrix[i]);
    }
  }

  // if matrix is 2D ;
  while (left <= right && top <= bottom) {
    //* l -> r
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    //* t -> b
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    //* r -> l
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    //* b -> t
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}
console.log(
  SpiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

//                                     ! 2Q . Rotate matrix / rotate image by 90 degree;
let rotateMat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

//* burte force : make a new matrix ; using extra space
function rotateMatrixBrute(arr) {
  // Array.from({ length: numRows }, () => Array(numCols).fill(initialValue));
  const ans = Array.from({ length: 4 }, () => Array(4).fill(0));
  // return ans;
  let input = 1;
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans[j][n - 1 - i] = arr[i][j];
    }
  }
  return ans;
}
// console.log(rotateMatrixBrute(rotateMat));

//* better : using transpose and then reverse every row ;

function rotateMatrixOptimal(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}
// console.log(rotateMatrixOptimal(rotateMat) );

//                                     ! 3Q .set Matrix Zero's

const zeroMatrix = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

// * Brute force

function setMatrixZeroBrute(arr) {
  let n = arr.length;
  let m = arr[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        for (let c = 0; c < m; c++) {
          if (arr[i][c]) arr[i][c] = "*"; // only assign to non-zero;
        }
        for (let r = 0; r < n; r++) {
          if (arr[r][j]) arr[r][j] = "*";
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "*") arr[i][j] = 0;
    }
  }
  return arr;
}
//time complexity : (nxm)x(n+m) + (nxm) = O(n3)

// console.log(setMatrixZeroBrute(zeroMatrix));

// * better
/* so approach is to make 2 arrays row and col , of size n and m , and if any element in a row of arr is zero;
we will mark row[index] = 0 ; similarly for col ;   
 */

function setMatrixZeroBetter(arr) {
  let n = arr.length;
  let m = arr.length;
  let row = Array(n).fill(1);
  let col = Array(m).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        row[i] = 0;
        col[j] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] === 0 || col[j] === 0) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

//time complexity : (nxm + nxm)=O(n2) space = O(m+n)
// console.log(setMatrixZeroBetter(zeroMatrix));

//*optimal
// so we cant improve tc more than O(n2) , but we can reduce the extra space , that could be optimal ;
// we would use the first row and column matrix of  the arr itself;

function setMatrixZeroOptimal(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let col0 = 1;
  let row0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        if (i != 0) {
          arr[i][0] = 0;
        } else row0 = 0;

        if (j != 0) {
          arr[0][j] = 0;
        } else col0 = 0;
      }
    }
  }

  // return { arr, row0, col0 }; // using two variables ;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (arr[i][j]) {
        if (arr[i][0] === 0 || arr[0][j] === 0) {
          arr[i][j] = 0;
        }
      }
    }
  }

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < m; j++) {
      if (row0 === 0 && arr[i][j]) {
        arr[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 1; j++) {
      if (col0 === 0 && arr[i][j]) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

// timecomplexity (n x m) + (n x m) , extra space constant ;
// console.log(setMatrixZeroOptimal(zeroMatrix));
let eg = [
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
// [
//   [1, 1, 2, 0],
//   [3, 4, 5, 0],
//   [1, 3, 1, 0],
// ];

// console.log(setMatrixZeroOptimal(eg));
