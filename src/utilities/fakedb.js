// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }


//     // add quantity
//     const quantity = shoppingCart[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else {
//         shoppingCart[id] = 1;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }



// //01 for Cart local storage store date long time
// const getStoreCart = () => {
//     let shoppingCart = {};
//     //01 get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }



// export {
//     addToDb,
//     getStoreCart
// }