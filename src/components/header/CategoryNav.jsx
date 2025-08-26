import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import categoryData from "../../data/siteData";
import "./CategoryNav.css";

const CategoryNav = () => {
  const categories = [
    { name: "Home", path: "/project_practicum_Y2S2_User/" },
    { name: "Food", path: "/project_practicum_Y2S2_User/food" },
    { name: "Drink", path: "/project_practicum_Y2S2_User/drink" },
    { name: "Dessert", path: "/project_practicum_Y2S2_User/dessert" },
    { name: "Booking", path: "/project_practicum_Y2S2_User/booking" },
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
              end={category.name === "Home"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-category" : ""}`
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
