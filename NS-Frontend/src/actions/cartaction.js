import { API } from "./../axios";
import { apis } from "./../constants";
import Cookie from "js-cookie";

export function addToCart(id) {
  return async dispatch => {
    const token = Cookie.get("token") ? Cookie.get("token") : null;

    if (!token) {
      window.alert("You need to login");
    } else {
      const response = await API.POST(apis.cart, { type: "add", id: id });
      if (response.success) {
        dispatch(getCounts());
      }
    }
  };
}
export function getCounts() {
  return async dispatch => {
    const response = await API.POST(apis.header);
    if (response.success) {
      return dispatch({
        type: "GET_COUNTS",
        payload: {
          wishlistCount: response.data.wishlist_no,
          cartCount: response.data.cart_no
        }
      });
    }
  };
}
