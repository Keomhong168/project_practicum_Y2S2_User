import { NavLink } from "react-router-dom";
import "./reservation.css";

const Reservation = () => {
  return (
    <div className="mt-3 d-flex justify-content-center align-items-center flex-column gap-3">
      <NavLink className="button-82-pushable text-decoration-none" role="button" to='/project_practicum_Y2S2_User/booking'>
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">Reserve a table <i className="bi bi-arrow-right"></i></span>
      </NavLink>
    </div>
  );
};

export default Reservation;
