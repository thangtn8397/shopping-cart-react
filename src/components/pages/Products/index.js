import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";
import Spinner from "../../UI/Spinner";
import PageHero from "../../PageHero";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { selectedItem } from "../../../helper";
import { connect } from "react-redux";
import { addToCart, fetchProducts } from "../../../store/actions";
import QuickviewProduct from "../../QuickviewProduct";
import Modal from "../../UI/Modal";
const Products = ({ products, onFetchProducts, onAddToCart, wishlist }) => {
  const [itemWatching, setWatchingItem] = useState(null);
  const [openQuickview, setOpenQuickview] = useState(false);
  useEffect(() => {
    onFetchProducts();
  }, []);
  const arrayIdItemWishlist = [];
  for (let key in wishlist) {
    arrayIdItemWishlist.push(key);
  }

  const productKeys = products !== null ? Object.keys(products) : [];
  const productsElement =
    productKeys.length > 0 ? (
      productKeys.map((key) => (
        <ProductItem
          inWishlist={arrayIdItemWishlist.includes(key)}
          key={key}
          product={products[key]}
          addToCart={() =>
            onAddToCart(selectedItem(products[key], 1, products[key].colors[0]))
          }
          openQuickview={() => {
            setWatchingItem(products[key]);
            setOpenQuickview(true);
          }}
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
      {openQuickview && itemWatching ? (
        <Modal
          isOpen={openQuickview}
          closeModal={() => setOpenQuickview(false)}
        >
          <QuickviewProduct
            product={itemWatching}
            closeQuickview={() => setOpenQuickview(false)}
            inWishlist={arrayIdItemWishlist.includes(itemWatching.id)}
          />
        </Modal>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    items: state.cartReducer.items,
    wishlist: state.wishlistReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
    onAddToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
