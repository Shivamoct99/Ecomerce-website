const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { product, amount, id, color } = action.payload;
    const isPresent = state.cart.find((curElm) => curElm.id === id + color);
    if (isPresent) {
      const UpdateCart = state.cart.map((curelm) => {
        if (curelm.id === id + color) {
          let newAmount = curelm.amount + amount;
          if (newAmount >= curelm.max) {
            newAmount = curelm.max;
          }
          return { ...curelm, amount: newAmount };
        } else {
          return curelm;
        }
      });
      return {
        ...state,
        cart: UpdateCart,
      };
    } else {
      const cartProducts = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProducts],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatecart = state.cart.filter((curelm) => {
      return curelm.id !== action.payload;
    });
    return {
      ...state,
      cart: updatecart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "SET_DECREASE") {
    let updateCart = state.cart.map((curelm) => {
      if (curelm.id === action.payload) {
        let newAmount = curelm.amount - 1;
        if (newAmount <= 1) {
          newAmount = 1;
        }
        return {
          ...curelm,
          amount: newAmount,
        };
      } else {
        return curelm;
      }
    });
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "SET_INCREASE") {
    let updateCart = state.cart.map((curelm) => {
      if (curelm.id === action.payload) {
        let newAmount = curelm.amount + 1;
        if (newAmount >= curelm.max) {
          newAmount = curelm.max;
        }
        return {
          ...curelm,
          amount: newAmount,
        };
      } else {
        return curelm;
      }
    });
    return {
      ...state,
      cart: updateCart,
    };
  }
  // if (action.type === "TOTAL") {
  //   let total_item = state.cart.reduce(
  //     (accum, curelm) => accum + curelm.amount,
  //     0
  //   );
  //   let total_amount = state.cart.reduce(
  //     (a, curelm) => a + curelm.price * curelm.amount,
  //     0
  //   );
  //   return {
  //     ...state,
  //     total_item,
  //     total_amount,
  //   };
  // }
  if (action.type === "TOTAL") {
    let { total_item, total_amount } = state.cart.reduce(
      (accum, curElm) => {
        let { price, amount } = curElm;
        accum.total_item += amount;
        accum.total_amount += price * amount;
        return accum;
      },
      { total_amount: 0, total_item: 0 }
    );
    return {
      ...state,
      total_item,
      total_amount,
    };
  }
  return state;
};

export default CartReducer;
