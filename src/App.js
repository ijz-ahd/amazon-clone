import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import "./App.css";

const promise = loadStripe(
  "pk_test_51HvgfDHNQDNRvoh8Ml9Tt9lZDYjOn39vdCDaQPixl7l7vd2PA9RgGMPzrovhKt7bFlKLOhQEItEbzMQSgoBjYPru00KAZ5wYlq"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User:", authUser);
      if (authUser) {
        dispatch({
          type: actionType.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
