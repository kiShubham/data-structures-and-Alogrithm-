const cart = ["shoes", "Pants", "Kurta"];

// api.createOrder(cart,callBackfn){
//   //code of cartOder
//   callBackfn() ;//call at the end
// }
//similalry payment will call oderSUmmary at last , and orderSUmmary will call updateWallet

api.createOrder(cart, () => {
  api.proceedToPayment(() => {
    api.showOderSummary(() => {
      api.updateWallet();
    });
  });
});
