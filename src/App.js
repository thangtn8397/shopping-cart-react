import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import Auth from "./components/pages/Auth";
import SingleProduct from "./components/pages/SingleProduct";
import Layout from "./components/Layout";
import "./styles/style.scss";
import UserInfo from "./components/pages/UserInfo";
import { connect } from "react-redux";
import { checkAuthState, fetchItemWishlist } from "./store/actions";

function App({ onCheckAuthState, userId, onInitWishlist }) {
  useEffect(() => {
    onCheckAuthState();
    onInitWishlist(userId);
  }, []);
  return (
    <Layout>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/my-account" component={UserInfo} />
        </Switch>
      </div>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthState: () => dispatch(checkAuthState()),
    onInitWishlist: (userId) => dispatch(fetchItemWishlist(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
