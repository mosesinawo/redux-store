import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notifiation from "./components/Notifiation";
import { fetchData , sendCardData} from "./store/cart-actions";

import { uiActions } from "./store/ui-slice";


// let isFirstRender = true;
function App() {

  // const dispatch = useDispatch()
  // const notification = useSelector(state => state.ui.notification)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const cart = useSelector(state => state.cart);
//   useEffect(() =>{
// dispatch(fetchData)
//   },[dispatch])
//   useEffect(() => {
//     if(isFirstRender){
//       isFirstRender = false; 
//       return
//     }
//     if(cart.changed){
//       dispatch(sendCardData(cart))
//     }
    
//   }, [cart, dispatch]);
  return (
    <div className="App">
     {/* {notification && <Notifiation type={notification.type} message={notification.message} />}
     <Notifiation type={notification.type} message={notification.message} /> */}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}

    </div>
  );
}

export default App;
