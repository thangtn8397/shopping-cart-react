import { useEffect } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./components/Layout";
import UserInfo from "./pages/UserInfo";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Error from "./components/Error";
import { checkAuthState, fetchItemWishlist } from "./store/actions";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/style.scss";

function App({ onCheckAuthState, onInitWishlist, userId, cartItems }) {
  useEffect(() => {
    onCheckAuthState();
  }, []);

  useEffect(() => {
    if (userId) {
      onInitWishlist(userId);
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/my-account" component={UserInfo} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/about" component={About} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </Layout>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthState: () => dispatch(checkAuthState()),
    onInitWishlist: (userId) => dispatch(fetchItemWishlist(userId)),
  };
};
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
    cartItems: state.cartReducer.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
