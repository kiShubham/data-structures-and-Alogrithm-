function listenToButton() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("button is clicked " + ++count);
  });
}
listenToButton();
///event listener takes spaces, and it always form closure , here also it make closure and remember the reference of count ;
// using concept of closure ; for count making it private ;the closure has the reference of the count ;

// throttling ;
/**
 * we dont want to create the flag again and again hence make it at top and used in closures ;
 * if the flag is true , the callBack will be called , else return ;
 */
/**
 * now this is example of closures ; when this fn is returned  the varaibale along witn its value will be remembered by this fn
 * like isThrottled = // and timerId ;
 *  */
/* 
function throttle(callback, delay) {
  let timerId;
  let isThrottled = true; //flag

  return function () {
    let context = this,
      args = arguments;
    if (isThrottled) {
      callback.apply(context, args);
      isThrottled = false;

      timerId = setTimeout(() => {
        isThrottled = true;
      }, delay);
    }
  };
}

function handleResize() {
  console.log("screen Resized");
}
const throttledResize = throttle(handleResize, 500);

//Attach the throttled function to the window's resize ;
window.addEventListener("resize", throttledResize);
 */

/* // debouncing
let counter = 0;
const getData = (home) => {
  // calls the api and fetching the data;
  // as for now mock it
  console.log("fetching the data" + " " + home + "..." + counter++);
};
const doSomeMagic = (fun, delayTime) => {
  let timerId;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fun.apply(this, ["ghar"]); // we can run fun() also if no arguments
      timerId = null; // reseting timerId
    }, delayTime);
    console.log(timerId);
  };
};
const betterFunction = doSomeMagic(getData, 600);
 */
