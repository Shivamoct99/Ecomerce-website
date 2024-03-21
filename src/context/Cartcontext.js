import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();
const GetMethod = () => {
  let data = localStorage.getItem("Cart");
  if (data === []) {
    return [];
  } else {
    return JSON.parse(data);
  }
};

const initialState = {
  // cart: [],
  cart: GetMethod(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { product, color, id, amount },
    });
  };
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };
  const setIncrease = (id) => {
    // console.log(id);
    return dispatch({ type: "SET_INCREASE", payload: id });
  };
  const setDecrease = (id) => {
    // console.log(id);
    return dispatch({ type: "SET_DECREASE", payload: id });
  };
  //  to add the data in localstorage
  //  get vs set
  useEffect(() => {
    dispatch({ type: "TOTAL" });
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartContextProvider, useCartContext };
