import React from "react";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { updateSort } from "../../../store/actions/productsAction";
import { connect } from "react-redux";

const Sort = ({ onUpdateSort, productsNumber }) => {
  return (
    <div className="products__items__sort">
      <div className="products__items__sort-left">
        <span>
          <AppsOutlinedIcon />
        </span>
        <span>
          <ListAltOutlinedIcon />
        </span>
        <p>{productsNumber ? productsNumber : 0} products found</p>
      </div>
      <hr />
      <div className="products__items__sort-right">
        <label>Sort by</label>
        <select onChange={(e) => onUpdateSort(e.target.value)}>
          <option value="">Default</option>
          <option value="price-lowest">Price lowest</option>
          <option value="price-highest">Price hightest</option>
          <option value="a-z">Sort by: a-z</option>
          <option value="z-a">Sort by: z-a</option>
        </select>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSort: (sort) => dispatch(updateSort(sort)),
  };
};
export default connect(null, mapDispatchToProps)(Sort);
