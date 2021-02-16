import React from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";

const Products = () => {
  return (
    <div className="products">
      <header className="products__header"></header>
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
              <p>23 products found</p>
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
          <div className=" products__grid">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
