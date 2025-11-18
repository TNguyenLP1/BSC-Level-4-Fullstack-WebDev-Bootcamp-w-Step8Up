import React from 'react';
import { useParams } from 'react-router-dom';
import { useBasket } from '../contexts/BasketContext';

import { products } from '../data';

function Product() {
  // This function (useParams) retrieves the dynamic route parameter "id" from the URL.
  // It is then used to find the matching product from the products array by converting
  // the id string into an integer and searching for a product with the same id.
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToBasket } = useBasket();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: £{product.price}</p>
      <button onClick={() => addToBasket(product)}>Add to Basket</button>
    </div>
  );
}

export default Product;