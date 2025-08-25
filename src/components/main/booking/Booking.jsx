import React, { useState } from 'react';
import Swal from 'sweetalert2'; // 1. Import SweetAlert2
import ContactInfo from '../home/ContactInfo'
import './Booking.css';

// 2. Define the initial state for easy reuse when resetting the form
const initialState = {
  name: '',
  phone: '',
  email: '',
  guests: '',
  date: '',
  time: '',
};

const Booking = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 3. Update handleSubmit to use SweetAlert and clear the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Show a success message with SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Booking Successful!',
      text: 'We have received your request and will be in touch shortly.',
      confirmButtonColor: '#dc3545' // Optional: match button color
    }).then((result) => {
      // Clear the form fields after the user clicks "OK"
      if (result.isConfirmed) {
        setFormData(initialState);
      }
    });
  };

  return (
    <>
    <div className="booking-container">
      <div className="card booking-card">
        <div className="card-body">
          <h2 className="card-title text-center booking-title">Booking Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>

            {/* Email Address Input */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>

            {/* Number of Guests Input */}
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Number of Guests"
                min="1"
                required
              />
            </div>

            {/* Date and Time Inputs */}
            <div className="row">
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-danger w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      <ContactInfo />
      </>
  );
};

export default Booking;