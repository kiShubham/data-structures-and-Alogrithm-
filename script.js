//understanding callStacks when async await runs ;

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p Promise resolved value !!!");
//   }, 10000);
// });

// const Q = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Q Promise resolved value !!!");
//   }, 20000);
// });

// async function getData() {
//   console.log("hello World");

//   const res = await p;
//   console.log(res);
//   console.log("p namaste Javascript");

//   const res2 = await Q;
//   console.log(res2);
//   console.log("Q namaste Javascript");
// }
// getData();
// console.log("outside of getData()");

// function listenToButton() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", () => {
//     console.log("button is clicked " + ++count);
//   });
// }
// listenToButton();

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

// understanding event propagation : bubbling and capturing ;
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandParent clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    bool = false;
    console.log("child clicked");
  },
  true
);
document.querySelector("#form").addEventListener("keyup", (e) => {
  // console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    //it means those children have uppercase custom attribute ;onlu those will run this condition
    e.target.value = e.target.value.toUpperCase();
  }
});
