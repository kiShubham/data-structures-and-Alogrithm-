/*   
todo: 1Q. print spiral matrix ;
todo: 1Q. Rotate the matrix ;
todo: 1Q. set Matrix Zero's

*/
const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
/*
 * timecomplexity > we are push every element so O(m*n) and we are storing it so space is same O(m*n);

 */

function SpiralMatrix(matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let res = [];

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
console.log(SpiralMatrix(matrix));
