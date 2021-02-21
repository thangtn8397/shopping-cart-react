import React, { useEffect } from "react";
import PageHero from "../../PageHero";
import ProductInfo from "../../ProductInfo";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../../../store/actions/productsAction";
import { useParams } from "react-router-dom";

const SingleProduct = ({ onFetchSingleProduct, product, loading }) => {
  const { id } = useParams();
  useEffect(() => {
    console.log("render");
    onFetchSingleProduct(id);
  }, []);
  const productInfo = loading ? null : <ProductInfo product={product} />;

  return (
    <>
      <PageHero link="Product" />
      {productInfo}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    product: state.productsReducer.product,
    loading: state.productsReducer.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
