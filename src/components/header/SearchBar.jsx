// src/components/SearchBar.js

import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css"; // We'll create this CSS file next

const SearchBar = () => {
  // State to track if the search input is active (visible)
  const [isActive, setIsActive] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // This effect handles clicks outside of the component to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // This effect focuses the input field when it becomes active
  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleIconClick = () => {
    // Toggle the active state
    setIsActive(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className={`search-container ${isActive ? "active" : ""}`}
    >
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-btn" onClick={handleIconClick}>
        {/* Both icons are placed here for the animation */}
        <i className="bi bi-search"></i>
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default SearchBar;
