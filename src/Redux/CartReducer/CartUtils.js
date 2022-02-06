export const qtyChange = (state, payload) => {
  const update = state.map((item) => {
    if (item.id === payload.id) {
      return { ...item, quantity: payload.value };
    } else {
      return item;
    }
  });
  
  return update;
};

export const removeItem = (stateCart, stateProducts, payload) => {
  const updatedCart = stateCart.filter((item) => item.id !== payload);
  const updatedProducts = stateProducts.map((item) => {
    if (item.id === payload) {
      return { ...item, quantity: 0 };
    } else {
      return item;
    }
  });
  return {
    cartProducts: updatedCart,
    products: updatedProducts,
  };
};
