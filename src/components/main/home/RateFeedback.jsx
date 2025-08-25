import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import StarRating from "./StarRating";
import "./rateFeedback.css";
const RateFeedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please provide a star rating before submitting.",
      });
      return;
    }
    console.log({ rating, feedback });

    // Show a success message using SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: `You rated us ${rating} stars.`,
      showConfirmButton: false,
      timer: 2000, // Automatically close after 2 seconds
    });

    setRating(0);
    setFeedback("");
  };

  return (
    <div className="card border-red shadow-lg">
      <div className="card-body feedback-body">
        <h5 className="card-title fw-bold">SHARE YOUR FEEDBACK</h5>
        <p className="card-text text-muted">
          How satisfied are you with our restaurant?
        </p>

        <StarRating rating={rating} setRating={setRating} />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control feedback-textarea"
              rows="4"
              placeholder="Please give us some feedback for more improvement."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-send btn-danger border-red">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default RateFeedback;
