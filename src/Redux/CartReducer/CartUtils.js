const newStateCreate = async () => {
  const response = await fetch(
    "http://dnc0cmt2n557n.cloudfront.net/products.json"
  );
  const data = await response.json();
  const loadedData = [];

  for (const key in data.products) {
    loadedData.push({
      id: data.products[key].id,
      title: data.products[key].title,
      desc: data.products[key].desc,
      quantity: 1,
      price: data.products[key].price,
      currency: data.products[key].currency,
    });
  }
  return loadedData;
};

export const qtyChange = async (state, payload) => {
  const response = await state;
  const ndata = [];
  for (const key in response) {
    if (response[key].id === payload.id) {
      ndata.push({ ...response[key], quantity: payload.value });
    } else {
      ndata.push(response[key]);
    }
  }
  return ndata;
};

export const removeItem = async (state, payload) => {
  const response = await state;
  const ndata = [];
  for (const key in response) {
    if (response[key].id !== payload) {
      ndata.push(response[key]);
    } else {
      
    }
  }
  console.log(ndata)
  return ndata;
};

export default newStateCreate;
