import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { connect } from "react-redux";
import { fetchProducts } from "../../../store/actions/productsAction";
import Spinner from "../../UI/Spinner";
import PageHero from "../../PageHero";

const Products = ({ products, onFetchProducts }) => {
  useEffect(() => {
    onFetchProducts();
  }, []);

  const productKeys = products !== null ? Object.keys(products) : [];
  console.log(productKeys.map((key) => products[key].price));
  const productsElement =
    productKeys.length > 0 ? (
      productKeys.map((key) => <ProductItem product={products[key]} />)
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
