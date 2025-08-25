import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "./remark.css"; // We'll create this CSS file next

const Remark = () => {
  // Use useLocation to get the data passed from the previous page
  const location = useLocation();
  const navigate = useNavigate();
  // Get the item object from the location state, or an empty object if it's not there
  const { item } = location.state || {};

  // Get the function to update the cart item from our context
  const { updateItemRemark } = useCart();

  // State to hold the remark as the user types
  const [remarkText, setRemarkText] = useState(item?.remark || "");

  // Handle saving the remark and navigating back
  const handleSaveRemark = () => {
    if (item) {
      updateItemRemark(item.id, remarkText);
    }
    navigate(-1); // Go back to the previous page (the CartPage)
  };

  // If there is no item data, redirect the user back to the cart page
  if (!item) {
    navigate("/cart");
    return null;
  }

  return (
    <>
      <header className="remark-header bg-red">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <h1 className="remark-title">Add a Remark</h1>
      </header>
      <div className="remark-page-container">
        <main className="remark-content">
          <div className="remark-item-card">
            <img
              src={item.image}
              alt={item.name}
              className="remark-item-image"
            />
            <div className="remark-item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="remark-form">
            <label htmlFor="remark" className="form-label">
              Your Note:
            </label>
            <textarea
              id="remark"
              className="form-control"
              value={remarkText}
              onChange={(e) => setRemarkText(e.target.value)}
              rows="4"
              placeholder="e.g., 'No onions, extra spicy' or 'Add whipped cream'"
            ></textarea>
            <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary-custom border-1 border-black px-4" onClick={() => navigate(-1)}>
              Back
            </button>
            <button
              className="btn btn-danger"
              onClick={handleSaveRemark}
            >
              Save Remark
            </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Remark;
