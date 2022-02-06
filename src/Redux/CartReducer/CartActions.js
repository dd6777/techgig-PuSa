import CartTypes from "./CartTypes";

const currentPersistence = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).cart).products
  : null;
export const StarterActionThunk = () => async (dispatch) => {
  if (currentPersistence === null || !currentPersistence) {
    const fetchData = await fetch(
      "https://dnc0cmt2n557n.cloudfront.net/products.json"
    );
    const response = await fetchData.json();
    var finalResponse = [];
    for (let key in response.products) {
      finalResponse.push({
        id: response.products[key].id,
        title: response.products[key].title,
        desc: response.products[key].desc,
        quantity: 1,
        price: response.products[key].price,
        currency: response.products[key].currency,
      });
    }
  } else {
    finalResponse = currentPersistence
  }
  dispatch({ type: CartTypes.STARTER_THUNK, payload: finalResponse });
};

export const QuantityChange = (id, value) => {
  return {
    type: CartTypes.QUANTITY_CHANGE,
    payload: { id, value: parseInt(value) },
  };
};

export const ToggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});

export const RemoveItem = (id) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: id,
});
