import { ADD_TO_CART } from "../../../constants/types";
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item,
  };
};
