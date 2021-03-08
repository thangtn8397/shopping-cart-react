import React, { useEffect } from "react";
import PageHero from "../../PageHero";
import ProductInfo from "../../ProductInfo";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../../../store/actions/productsAction";
import { useParams } from "react-router-dom";

const SingleProduct = ({ onFetchSingleProduct, product }) => {
  const { id } = useParams();

  useEffect(() => {
    onFetchSingleProduct(id);
  }, []);
  const productInfo = !product ? null : <ProductInfo product={product} />;

  return (
    <>
      <PageHero products={true} link={product ? product.name : ""} />
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
    wishlist: state.wishlistReducer.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
