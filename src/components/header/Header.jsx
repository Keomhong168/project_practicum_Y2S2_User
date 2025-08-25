import "./header.css";
import SearchBar from "./SearchBar";
import CategoryNav from "./CategoryNav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluit header-bar d-flex flex-column">
      <ul className="header-icon pt-2 d-flex flex-row position-relative justify-content-between">
        <li className="icon-home p-1 rounded-5">
          <NavLink className="style-icon-home" to="/">
            <i className="bi bi-house"></i>
          </NavLink>
        </li>
        <li className="d-flex flex-row right-side d-flex gap-2">
          <SearchBar />
          <div className="card-component">
            <NavLink className="card-icon"  to="/cart">
              <i className="bi bi-basket-fill"></i>
            </NavLink>
          </div>
        </li>
      </ul>
      <div className="header-title d-flex justify-content-center align-items-center">
        <h1 className="text-light">Restaurant name</h1>
      </div>
      <CategoryNav />
    </header>
  );
};

export default Header;
