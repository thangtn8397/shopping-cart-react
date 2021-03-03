import React, { useState, useEffect } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { connect } from "react-redux";
import { updateFilter } from "../../../../store/actions";
import { getUniquevalue } from "../../../../helper";
import { clearFilter } from "../../../../store/actions/productsAction";

const Sidebar = ({ onUpdateFilter, onClearFilter, products, filters }) => {
  const {
    category,
    company,
    color,
    price,
    min_price,
    max_price,
    shipping,
  } = filters;
  const categories = ["all", ...getUniquevalue(products, "category")];
  const companies = ["all", ...getUniquevalue(products, "company")];
  const colors = ["all", ...getUniquevalue(products, "colors")];
  return (
    <form
      className="sidebar"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="sidebar__searchbar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onUpdateFilter("text", e.target.value)}
        />
      </div>

      <div className="sidebar__category sidebar__filter">
        <h4>Category</h4>
        <ul className="sidebar__category-list">
          {categories.map((item) => (
            <li
              className={item === category ? "active" : ""}
              key={item}
              onClick={() => {
                onUpdateFilter("category", item);
              }}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__company sidebar__filter">
        <h4>Company</h4>
        <select
          value={company}
          name="company"
          onChange={(e) => onUpdateFilter("company", e.target.value)}
        >
          {companies.map((company) => (
            <option
              className="sidebar__company-item"
              key={company}
              value={company}
            >
              {company}
            </option>
          ))}
        </select>
      </div>
      <div className="sidebar__colors sidebar__filter">
        <h4>Colors</h4>
        {colors.map((colorItem) =>
          colorItem !== "all" ? (
            <span
              className="select-color"
              key={colorItem}
              style={{ backgroundColor: `${colorItem}` }}
              onClick={() => {
                onUpdateFilter("color", colorItem);
              }}
            >
              {color === colorItem ? <CheckIcon /> : null}
            </span>
          ) : (
            <span
              style={color === "all" ? { borderBottom: "1px solid #ccc" } : {}}
              onClick={() => onUpdateFilter("color", "all")}
            >
              All
            </span>
          )
        )}
      </div>
      <div className="sidebar__price sidebar__filter">
        <h4>Price</h4>
        <div className="sidebar__price-value">${price}</div>
        <input
          type="range"
          name="price"
          value={price}
          min={min_price}
          max={max_price}
          onChange={(e) => onUpdateFilter("price", e.target.value)}
        />
      </div>
      <div className="sidebar__shipping">
        <span>Free Shipping</span>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping}
          onChange={(e) => {
            onUpdateFilter("shipping", e.target.checked);
          }}
        />
      </div>
      <button onClick={() => onClearFilter()}>clear filter</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.productsReducer.filters.text,
    products: state.productsReducer.products,
    filters: state.productsReducer.filters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateFilter: (key, value) => dispatch(updateFilter(key, value)),
    onClearFilter: () => dispatch(clearFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
