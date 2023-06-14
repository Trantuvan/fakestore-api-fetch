import getQueryParam from "../helpers/getUrlQueryParam.js";
import { getProductById } from "../api/products.js";

const render = (image) => {
  const productImg = document.querySelector(".img");
  productImg.src = image;
};

(async () => {
  const productId = getQueryParam("product-id");

  if (productId === null) {
    console.log("the product is not exists");
    return "this product is not exist";
  }

  // const product = await getProductById(parseInt(productId));
  const { image } = await getProductById(parseInt(productId));
  render(image);
})();
