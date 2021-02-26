import React, { useEffect } from "react";
import WishlistItem from "./WishlistItem";
import { connect } from "react-redux";

const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist">
      {wishlist.map((item) => (
        <WishlistItem key={item.id} item={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
  };
};

export default connect(mapStateToProps)(Wishlist);
