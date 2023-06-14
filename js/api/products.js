const getProductById = async (producId) => {
  const response = await fetch(`https://fakestoreapi.com/products/${producId}`);

  if (response.ok === false) {
    throw new Error(response.status);
  }

  return response.json();
};

export { getProductById };
