import React from "react";
import { useForm } from "../../../../hooks/useForm";
import Input from "../../../UI/Input";
import { billingDetailsForm } from "../../../../constants/form";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { order } from "../../../../store/actions/authAction";
import { v4 as uuidv4 } from "uuid";

const BillingDetails = ({ onOrder, userId, cartItems }) => {
  const { formElementsArray, inputChangedHandler, formData } = useForm(
    billingDetailsForm
  );
  const history = useHistory();

  const createOrder = () => {
    return {
      [uuidv4()]: {
        shippingInfo: {
          lastName: formData.formDetail.lastName.value,
          firstName: formData.formDetail.firstName.value,
          address: formData.formDetail.address.value,
          phoneNumber: formData.formDetail.phoneNumber.value,
        },
        items: {
          ...cartItems,
        },
      },
    };
  };

  return (
    <form
      className="checkout__billingDetails"
      onSubmit={(e) => {
        e.preventDefault();
        onOrder(userId, createOrder());
      }}
    >
      <h2>Billing Details</h2>

      {formElementsArray.map((element) => (
        <Input
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          label={element.config.label}
          shouldValidate={element.config.rules}
          touched={element.config.touched}
          invalid={!element.config.valid}
          onChanged={(event) => inputChangedHandler(event, element.id)}
        />
      ))}
      <select value="cash">
        <option value="cash on delivery">Cash on delivery</option>
      </select>
      <div className="checkout__billingDetails-links">
        <span onClick={() => history.push("/cart")}>
          <KeyboardArrowLeftIcon />
          Return to cart
        </span>
        <button disabled={!formData.formValid} type="submit">
          Order
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrder: (userId, orderDetail) => dispatch(order(userId, orderDetail)),
  };
};
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
