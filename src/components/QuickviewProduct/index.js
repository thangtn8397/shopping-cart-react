import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ProductInfo from "../ProductInfo";
const QuickviewProduct = ({ closequickview, product, inWishlist }) => {
  return (
    <section className="quickview">
      <header className="quickview__header">
        <CloseIcon onClick={closequickview} />
      </header>
      <ProductInfo product={product} inWishlist={inWishlist} />
    </section>
  );
};

export default QuickviewProduct;
