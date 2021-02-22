import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id" component={SingleProduct} />
      </Switch>
    </div>
  );
}

export default App;
