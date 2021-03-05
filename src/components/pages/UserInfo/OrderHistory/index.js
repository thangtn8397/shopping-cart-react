import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../../../store/actions/authAction";

const OrderHistory = ({ orders, userId, onGetOrders }) => {
  useEffect(() => onGetOrders(userId), []);
  const ordersKey = orders ? Object.keys(orders) : [];
  const orderItems = ordersKey.map((key) => (
    <div className="orderHistory__orderItem">
      <p>{key}</p>
      <p>{orders[key].date}</p>
      <p>${orders[key].total}</p>
    </div>
  ));
  return (
    <div className="orderHistory">
      <div className="orderHistory__header">
        <h4>Order id</h4>
        <h4>Date</h4>
        <h4>Total</h4>
      </div>
      {orderItems}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.authReducer.orders,
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetOrders: (userId) => dispatch(fetchOrders(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
