import React from "react";
import { useBasket } from "../contexts/BasketContext";

function Basket() {
  const { basket, updateQuantity, removeItem, calculateTotal } = useBasket();

  return (
    <div>
      <h1>Your Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {basket.map((item) => (
            <div key={item.id} className="basket-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </label>
              <button onClick={() => removeItem(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <h2 className="basket-total">Total: £{calculateTotal()}</h2>
        </div>
      )}
    </div>
  );
}

export default Basket;