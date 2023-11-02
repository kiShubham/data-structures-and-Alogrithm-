/* const cart = ["shoes", "Pants", "Kurta"];

// using callbacks

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// using promises

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// or we can also write as using promises with arrowfucntion more readable ;

promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOderSummarypaymentInfo)
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

// so much cleaner , maintainable
// no inversion of control and no callback hell
// we can use .catch for catch error in any steps
// by that we dont have to face inversion of control
 */
// todo :------------- how to make a promise -------------
/*
 as we know that createOrder will return us a promise so , make a promise
inside the fn and return it ; use Promise() constructor ;
in the fn inside Promise(fn(){}) we will write
what is create order is need to do the logic
*/

const cart = ["shoes", "Pants", "Kurta"];

/* const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId);
});
 */
function createOrder(cart) {
  const res = new Promise(function (resolve, reject) {
    //validate cart
    //make call to db ;
    // save it and we will get a orderID

    //orderId will be return as success ;
    // if it fails we can throw an error ;

    //* for rejecting:
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid or any failure message");
      reject(err);
    }

    //* for resolving
    const orderId = "12345"; // dummy orderid
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }

    //* in js promise always return either of these two value: reject or resolve ;
  });
  return res;
}

function validateCart(cart) {
  return true;
}

function fake(a) {
  const eg = new Promise(function (resolve, reject) {
    if (a === true) resolve("promise fulfilled");
    else reject("promise is not fulfilled");
  });
  return eg;
}
// console.log(fake(true));

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p Promise resolved value !!!");
  }, 3000);
});

const Q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Q Promise resolved value !!!");
  }, 5000);
});

async function getData() {
  console.log("hello world");

  const res = await p;
  console.log(res);
  console.log("p namaste Javascript");

  const res2 = await Q;
  console.log(res2);
  console.log("Q namaste Javascript");
}

// getData();
// console.log("hi");
// setTimeout(() => {
//   // console.log("inthe setTImeOUt");
// }, 4000);

// const result = await getData();

// console.log(result);

// function getData() {
//   p.then((res) => console.log(res))
//     .then((res) => console.log("yahho"))
//     .then((res) => console.log("object"));
//   console.log("namaste javascript");
// }

let ok = "12345";
const gg = async (jewel) => {
  try {
    if (jewel) return ok;
  } catch (error) {
    console.error(error);
  }
};
gg(true).then((res) => console.log(res));
