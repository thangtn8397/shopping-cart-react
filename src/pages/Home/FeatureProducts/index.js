import React, { useEffect } from "react";
import ProductItem from "../../../components/ProductItem";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../store/actions";
import { connect } from "react-redux";

const FeatureProducts = ({ featureProduct, onFetchProducts }) => {
  useEffect(() => onFetchProducts(), []);
  return (
    <section className="feature-products">
      <div className="container wrapper">
        <div className="feature-products__header">
          <h2>Feature Products</h2>
          <span></span>
        </div>
        <div className="feature-products__grid">
          {featureProduct.map((item) => (
            <ProductItem product={item} key={item.id} position={item.index} />
          ))}
        </div>
        <button className="feature-products__btn btn">
          <Link to="/products">All Products</Link>
        </button>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    featureProduct: state.productsReducer.featureProducts,
    wishlist: state.wishlistReducer.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProducts);
