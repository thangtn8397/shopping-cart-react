import React, { useState, useEffect } from "react";
import PageHero from "../../PageHero";
import ProductInfo from "../../ProductInfo";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../../../store/actions/productsAction";
import { useParams } from "react-router-dom";

const SingleProduct = ({ onFetchSingleProduct, product, wishlist }) => {
  const { id } = useParams();
  const [inWishlist, setInWishlist] = useState(false);
  const array = wishlist ? Object.keys(wishlist) : [];
  useEffect(() => {
    onFetchSingleProduct(id);
    console.log(array.length);
    setInWishlist(array.includes(id));
  }, [array.length]);
  const productInfo = !product ? null : (
    <ProductInfo product={product} inWishlist={inWishlist} />
  );

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
    wishlist: state.wishlistReducer.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
