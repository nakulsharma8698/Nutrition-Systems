const INITIAL_STATE = { cartCount: 0, wishlistCount: 0 };

export const CountsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COUNTS":
      return {
        ...state,
        wishlistCount: action.payload.wishlistCount,
        cartCount: action.payload.cartCount
      };
    default:
      return state;
  }
};
