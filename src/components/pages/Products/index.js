import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { connect } from "react-redux";
import { addToCart, fetchProducts } from "../../../store/actions";
import Spinner from "../../UI/Spinner";
import PageHero from "../../PageHero";

const Products = ({ products, onFetchProducts, onAddToCart }) => {
  useEffect(() => {
    onFetchProducts();
  }, []);

  const productKeys = products !== null ? Object.keys(products) : [];
  const productsElement =
    productKeys.length > 0 ? (
      productKeys.map((key) => (
        <ProductItem
          product={products[key]}
          addToCart={() => onAddToCart(products[key])}
        />
      ))
    ) : (
      <Spinner />
    );

  return (
    <div className="products">
      <PageHero products={true} />
      <div className="products__wrapper container wrapper">
        <Sidebar />
        <div className="products__items">
          <div className="products__items__sort">
            <div className="products__items__sort-left">
              <span>
                <AppsOutlinedIcon />
              </span>
              <span>
                <ListAltOutlinedIcon />
              </span>
              <p>{productKeys.length} products found</p>
            </div>
            <hr />
            <div className="products__items__sort-right">
              <label>Sort by</label>
              <select>
                <option>Price lowest</option>
                <option>Price lowest</option>
                <option>Price lowest</option>
              </select>
            </div>
          </div>
          <div className=" products__grid">{productsElement}</div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    items: state.cartReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
    onAddToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
