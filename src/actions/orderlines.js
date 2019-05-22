import request from "superagent";
import { baseUrl } from "../constants";


export const ADD_CART_ORDERLINE = "ADD_CART_ORDERLINE";
export const SET_ORDERLINE = "SET_ORDERLINE";

const addOrderline = orderline => {
  return {
    type: ADD_CART_ORDERLINE,
    payload: orderline
  };
};
export const setOrderline = orderline => {
  return {
    type: SET_ORDERLINE,
    payload: orderline
  };
};




  export const addToOrderline = (
    id, price, quantity, shopId, userId, orderId
  ) => dispatch =>{

  request
    .post(`${baseUrl}/orders/${orderId}/`)
    .send({
      productId: id,
      price,
      quantity,
      shopId,
      userId,
      orderId
    })
    .then(result => {
      console.log("RESULT-BODY", result.body);
      dispatch(addOrderline(result.body));
    })
    .catch(err => console.error(err));
};

export const getOrderline = (id) => dispatch => {
  request
    .get(`${baseUrl}/orders/${id}/orderlines`)
    .then(result => {
      dispatch(setOrderline(result.body));
    })
    .catch(err => console.error(err));
};
