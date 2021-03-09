import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../components/ProductItem";
import Spinner from "../../components/UI/Spinner";
import PageHero from "../../components/PageHero";
import { connect } from "react-redux";
import {
  fetchProducts,
  filterProducts,
  sortProducts,
} from "../../store/actions";
import Sort from "./Sort";

const Products = ({
  products,
  filters,
  sort,
  onFetchProducts,
  onSortProducts,
  onFilterProducts,
}) => {
  useEffect(() => {
    onFetchProducts();
  }, []);

  useEffect(() => {
    onFilterProducts();
    onSortProducts();
  }, [sort, filters]);

  const productsElement =
    products !== null ? (
      products.map((product, index) => (
        <ProductItem key={index} position={index} product={product} />
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.filteredProducts,
    filters: state.productsReducer.filters,
    sort: state.productsReducer.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
    onFilterProducts: () => dispatch(filterProducts()),
    onSortProducts: (sort) => dispatch(sortProducts(sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
