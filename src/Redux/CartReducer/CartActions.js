import CartTypes from "./CartTypes";

export const StarterAction = () => ({
  type: CartTypes.STARTER,
});

export const QuantityChange = (id, value) => ({
  type: CartTypes.QUANTITY_CHANGE,
  payload: { id, value },
});

export const ToggleCart = () => ({
  type: CartTypes.TOGGLE_CART,
});

export const RemoveItem = (id) => ({
  type:CartTypes.REMOVE_ITEM,
  payload:id
})
