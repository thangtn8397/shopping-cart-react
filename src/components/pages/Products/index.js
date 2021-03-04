import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";
import Spinner from "../../UI/Spinner";
import PageHero from "../../PageHero";
import { selectedItem } from "../../../helper";
import { connect } from "react-redux";
import {
  addToCart,
  fetchProducts,
  filterProducts,
  sortProducts,
} from "../../../store/actions";
import QuickviewProduct from "../../QuickviewProduct";
import Modal from "../../UI/Modal";
import Sort from "./Sort";

const Products = ({
  products,
  filters,
  sort,
  onFetchProducts,
  onAddToCart,
  wishlist,
  onSortProducts,
  onFilterProducts,
}) => {
  const [itemWatching, setWatchingItem] = useState(null);
  const [openQuickview, setOpenQuickview] = useState(false);
  useEffect(() => {
    onFetchProducts();
  }, []);
  useEffect(() => {
    onFilterProducts();
    onSortProducts();
  }, [sort, filters]);

  const arrayIdItemWishlist = [];
  for (let key in wishlist) {
    arrayIdItemWishlist.push(key);
  }

  const productsElement =
    products !== null ? (
      products.map((product, index) => (
        <ProductItem
          key={index}
          position={index}
          inWishlist={arrayIdItemWishlist.includes(product.id)}
          product={product}
          addToCart={() =>
            onAddToCart(selectedItem(product, 1, product.colors[0]))
          }
          openQuickview={() => {
            setWatchingItem(product);
            setOpenQuickview(true);
          }}
        />
      ))
    ) : (
      <Spinner />
    );

  return (
    <div className="products">
      <PageHero link="Products" />
      <div className="products__wrapper container wrapper">
        <Sidebar />
        <div className="products__items">
          <Sort productsNumber={products.length} />
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
    products: state.productsReducer.filteredProducts,
    items: state.cartReducer.items,
    wishlist: state.wishlistReducer.items,
    filters: state.productsReducer.filters,
    sort: state.productsReducer.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
    onAddToCart: (item) => dispatch(addToCart(item)),
    onFilterProducts: () => dispatch(filterProducts()),
    onSortProducts: (sort) => dispatch(sortProducts(sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
