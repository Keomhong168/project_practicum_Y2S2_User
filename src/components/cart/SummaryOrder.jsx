import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import pandas from "../../assets/images/ImgPlatform/pandas.jpg";
import "./OrderSummary.css";
import menuDataAPI from '../../assets/data/menuDataAPI';

const Info = menuDataAPI.contactInfo;

const OrderSummary = () => {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFinalSendOrder = async () => {
    handleCloseModal();

    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.3;
          if (success) {
            resolve({ status: 200, message: "Order placed successfully!" });
          } else {
            reject({
              status: 500,
              message: "Failed to place order. Please try again.",
            });
          }
        }, 1000);
      });

      await Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: response.message,
        confirmButtonColor: "#dc3545",
        timer: 3000,
        timerProgressBar: true,
      });

      clearCart();
      navigate("/");
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Order Failed!",
        text: error.message,
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <>
      <header className="summary-header text-center bg-red">
        <h1 className="fw-bold">Order Summary</h1>
      </header>

      <div className="summary-page-container d-flex flex-column">
        <div className="scroll-content-wrapper">
          <main className="summary-body p-3">
            <div className="restaurant-info mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="fw-bold fs-5 mb-0">Restaurant name</p>
                  <p className="text-muted mb-0">{Info.phoneNumber}</p>
                  <a
                    href="mailto:Suli_smos_sne@gmail.com"
                    className="text-decoration-none"
                  >
                    {Info.email}
                  </a>
                </div>
                <img
                  src={pandas}
                  alt="Restaurant Logo"
                  className="restaurant-logo"
                />
              </div>
              <hr className="my-2 dashed-line" />
              <div className="d-flex justify-content-between">
                <span className="fw-bold">Table: T1</span>
                <span className="fw-bold">Dine In</span>
              </div>
            </div>
            <hr className="my-2 dashed-line" />
            <div className="order-items-list">
              <div className="d-flex fw-bold justify-content-between text-muted small mb-2">
                <span className="col-5">Description</span>
                <span className="col-2 text-center">Qty</span>
                <span className="col-2 text-end">Price ($)</span>
                <span className="col-3 text-end">Subtotal ($)</span>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span className="col-5">{item.name}</span>
                  <span className="col-2 text-center">{item.quantity}</span>
                  <span className="col-2 text-end fw-bold">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="col-3 text-end fw-bold">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <hr className="my-2 dashed-line" />
          </main>

          <div className="summary-total-payment p-3">
            <div className="d-flex justify-content-between total-section fw-bold fs-5">
              <span>Total ({totalItems}):</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <hr className="my-2 dashed-line" />
            <div className="d-flex justify-content-between payment-section text-muted">
              <span>Pay at Counter</span>
            </div>
          </div>
        </div>

        <footer className="summary-footer d-flex justify-content-between p-3">
          <button className="btn btn-secondary-custom border-1 border-black px-4" onClick={handleGoBack}>
            Back
          </button>
          <button className="btn btn-danger px-3" onClick={handleShowModal}>
            Send Order
          </button>
        </footer>

        {/* The Bootstrap Modal JSX controlled by React State */}
        <div
          className={`modal fade ${showModal ? "show d-block" : ""}`}
          id="confirmOrderModal"
          tabIndex="-1"
          aria-labelledby="confirmOrderModalLabel"
          aria-hidden={!showModal}
          style={{
            backgroundColor: showModal ? "rgba(0, 0, 0, 0.5)" : "transparent",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmOrderModalLabel">
                  Confirm Order
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to send this order?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleFinalSendOrder}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
