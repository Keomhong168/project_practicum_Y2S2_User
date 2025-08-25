import { useCart } from "./CartContext"; // Get everything from our global context!
import "./cart.css"; // Reuse the same CSS from before
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  // Get all cart data and functions from the context
  const {
    cartItems,
    totalItems,
    totalPrice,
    addItemToCart,
    handleQuantityChange,
  } = useCart();
  const navigate = useNavigate();
  // Create a handler function for the back button
  const handleGoBack = () => {
    navigate(-1); // This tells the router to go back one page in history
  };
  const handleRemarkClick = (e, item) => {
    e.preventDefault();
    // Navigate to the Remark page and pass the entire item object in the state
    navigate("/remark", { state: { item } });
  };
  return (
    <div className="container-fluit d-flex justify-content-center align-items-center">
      <div className="cart-container">
        <header className="cart-header bg-red">
          <i className="bi bi-cart3"></i>
          <h1 className="cart-title ms-3">My Cart</h1>
        </header>

        <main className="cart-body">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              // This is the CartItem component from the first example. No changes needed!
              <div key={item.id} className="card mb-3 border-0">
                <div className="card-body p-2 d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image me-3" // Added a class for custom styling
                  />
                  <div className="item-details">
                    <h5 className="item-name mb-1">{item.name}</h5>
                    <p className="item-price text-danger fw-bold m-0">
                      ${item.price.toFixed(2)}
                    </p>
                    <NavLink
                      to="/remark" // The path is simply /remark
                      state={{ item }} // Pass the item object in the state prop
                      className="edit-link text-decoration-none bg-red text-light px-1 border border-0 border-black"
                    >
                      <i className="bi bi-pen"></i>
                    </NavLink>
                    {item.remark && (
                      <p className="small text-success mt-1 mb-0">
                        Note: "{item.remark}"
                      </p>
                    )}
                  </div>
                  <div className="item-controls ms-auto text-end">
                    <div className="quantity-control d-flex align-items-center">
                      <button
                        className="btn quantity-btn"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="quantity-number mx-2">
                        {item.quantity}
                      </span>
                      <button
                        className="btn quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted mt-4">Your cart is empty.</p>
          )}
        </main>
        {/* <div className='cart-footer-control'> */}
        <section className="cart-total-section">
          <p className="total-text">Total ({totalItems}):</p>
          <p className="total-price">${totalPrice.toFixed(2)}</p>
        </section>

        <footer className="cart-footer">
          <button
            className="btn btn-secondary-custom border-1 border-black"
            onClick={handleGoBack}
          >
            Back
          </button>
          <NavLink
            className="btn btn-danger border-1 border-black"
            to="/summaryOrder"
          >
            Next
          </NavLink>
        </footer>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CartPage;
