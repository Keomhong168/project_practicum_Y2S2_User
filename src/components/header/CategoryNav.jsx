import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import categoryData from "../../data/siteData";
import "./CategoryNav.css";

const CategoryNav = () => {
  const categories = [
    { name: "Home", path: "/" },
    { name: "Food", path: "/food" },
    { name: "Drink", path: "/drink" },
    { name: "Dessert", path: "/dessert" },
    { name: "Booking", path: "/booking" },
  ];

  // State to keep track of the active category. 'Home' is the default.
  const [activeCategory, setActiveCategory] = useState("Home");

  // This function updates the state when a link is clicked
  const handleLinkClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="category-nav-bar">
      <ul className="nav nav-pills justify-content-center">
        {categories.map((category) => (
          <li className="nav-item" key={category.name}>
            <NavLink
              to={category.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active active-category" : ""}`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
