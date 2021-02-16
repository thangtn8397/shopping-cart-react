import React, { useState } from "react";
import { category, companys, colors } from "../../../../constants";
import CheckIcon from "@material-ui/icons/Check";

const Sidebar = () => {
  const [categoryCopy, setCategory] = useState(category);
  const [filterColor, setFilterColor] = useState("all");
  const [filterPrice, setFilterPrice] = useState(0.0);
  const [filterShipping, setFilterShipping] = useState(false);

  const setActive = (index) => {
    setCategory(
      categoryCopy.map((item) =>
        item.filter === index
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__searchbar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="sidebar__category sidebar__filter">
        <h4>Category</h4>
        <ul className="sidebar__category-list">
          {categoryCopy.map((item) => (
            <li
              className={item.active ? "active" : ""}
              key={item.filter}
              onClick={() => setActive(item.filter)}
            >
              <span>{item.displayName}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__company sidebar__filter">
        <h4>Company</h4>
        <select name="" id="">
          {companys.map((company) => (
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
        <span onClick={() => setFilterColor("all")}>All</span>
        {colors.map((color) => (
          <span
            key={color}
            style={{ backgroundColor: `${color}` }}
            onClick={() => setFilterColor(color)}
          >
            {filterColor === color ? <CheckIcon /> : null}
          </span>
        ))}
      </div>
      <div className="sidebar__price sidebar__filter">
        <h4>Price</h4>
        <div className="sidebar__price-value">${filterPrice}</div>
        <input
          type="range"
          name="price"
          id=""
          value={filterPrice}
          min={0.0}
          max={100}
          onChange={(e) => setFilterPrice(e.target.value)}
        />
      </div>
      <div className="sidebar__shipping">
        <span>Free Shipping</span>
        <input
          type="checkbox"
          name="shipping"
          id=""
          checked={filterShipping}
          onClick={() => setFilterShipping(!filterShipping)}
        />
      </div>
      <button>clear filter</button>
    </div>
  );
};

export default Sidebar;
