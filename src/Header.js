import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form class="search-form" id="js-search-form">
        <input
          type="text"
          placeholder="Enter City ...."
          required
          class="search-form-input"
          id="js-search-form-input"
        />
        <input
          type="submit"
          value="Search"
          class="search-button"
          id="js-search-button"
        />
      </form>
    </div>
  );
}
