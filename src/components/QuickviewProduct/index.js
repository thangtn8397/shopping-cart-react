import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const QuickviewProduct = () => {
  return (
    <section className="quickview">
      <header className="quickview__header">
        <CloseIcon />
      </header>
      <div className="quickview__product">
        <div className="quickview__image">
          <img src="https://dl.airtable.com/.attachments/d42fd61c4d1ae2a02afe29114bd0fef3/d312dda5/product-2.jpg" />
        </div>
        <div className='quickview__'
      </div>
    </section>
  );
};

export default QuickviewProduct;
