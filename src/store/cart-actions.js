












































// import { cartActions } from "./cart-slice";
// import { uiActions } from "./ui-slice";

// export const fetchData = () => {
//     return async (dispatch) => {

//         const fetchHandler = async () => {
//             const res = await fetch('https://redux-http-d637f-default-rtdb.firebaseio.com/cartItems.json')
//             const data = await res.json()
//             return data;
//         }
//         try {
//             const cartData = await fetchHandler()
//             dispatch(cartActions.replaceData(cartData))
//         } catch (err) {
//             dispatch(uiActions.showNotification({
//                 open: true,
//                 message: 'Sending Request failed',
//                 type: 'error'
//             }));
//         }
//     }
// }

// export const sendCardData = (cart) => {
//     return async (dispatch) => {
//         dispatch(uiActions.showNotification({
//             open: true,
//             message: 'Sending Request',
//             type: 'warning'
//         }))
//         const sendRequest = async () => {
//             //send state as sending request

//             const res = await fetch('https://redux-http-d637f-default-rtdb.firebaseio.com/cartItems.json', {
//                 method: "PUT",
//                 body: JSON.stringify(cart)
//             });
//             const data = await res.json();
//             //send state as request is sucessful
//             dispatch(uiActions.showNotification({
//                 open: true,
//                 message: 'Sent Request To Database Sucessfully',
//                 type: 'success',
//             }))
//         };
//         try {
//             await sendRequest();
//         } catch (err) {
//             dispatch(uiActions.showNotification({
//                 open: true,
//                 message: 'Sending Request failed',
//                 type: 'error'
//             }))
//         }
//     }
// }