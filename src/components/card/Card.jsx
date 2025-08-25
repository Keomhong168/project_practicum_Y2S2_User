import React, { useState, useEffect } from "react";
import { useCart } from '../cart/CartContext';
import "./card.css";

const Card = ({ item }) => {

  // Get everything we need from the CartContext
  const { cartItems, addItemToCart, handleQuantityChange } = useCart();

  // Find this specific item in the global cart to get its current quantity
  const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
  const currentQty = itemInCart ? itemInCart.quantity : 0;

   // This part for the rating is perfect, no changes needed.
  const [avgRating, setAvgRating] = useState(0);
  useEffect(() => {
    if (item.totalUsers > 0) {
      setAvgRating((item.totalStars / item.totalUsers).toFixed(1));
    }
  }, [item]);

  // 3. Create new functions that call the context
  const handleIncrease = () => {
    // If item is not in cart yet, add it for the first time.
    if (!itemInCart) {
      addItemToCart(item);
    } else {
      // If it's already in the cart, just increase its quantity.
      handleQuantityChange(item.id, 1);
    }
  };

  const handleDecrease = () => {
    // This function will only work if the item is already in the cart.
    // The context logic will automatically remove it if the quantity becomes 0.
    if (itemInCart) {
      handleQuantityChange(item.id, -1);
    }
  };

  return (
    <div className="card shadow-card food-card">
      <div className="position-relative p-2">
        <img  src={item.image}  className="card-img-top card-img" alt={item.name} />
        <div className="rating-badge">⭐ {avgRating}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title title-food-font-size mb-2">{item.name}</h5>
        <div className="container-price-btn">

        <h5 className="text-success price-font-size ">${item.price}</h5>
        <div className="d-flex gap-1">
          <button
            className="btn-qty-control"
            onClick={handleDecrease}
          >
            –
          </button>
          <span className="fs-4">{currentQty}</span>
          <button
            className="btn-qty-control"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
