function square(num) {
  return num * num;
}

const memoizationFn = (fn) => {
  let cache = {}; // holding variable - stores the output and the input ;
  return (n) => {
    if (cache[n]) {
      // check whter the input exist or not ;

      //if exist get the value return
      console.log("cached Value");
      return cache[n];
    } else {
      // calculate the value ;
      console.log("Calculated Value");
      const value = fn(n);
      cache[n] = value;
      return cache[n];
    }
  };
};
const memorizedSquare = memoizationFn(square);
memorizedSquare(2);
memorizedSquare(2);
// rewise clousure ;
// high order fn->taking input fn return function as output
