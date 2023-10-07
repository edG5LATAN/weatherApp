import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="./img/icono.jpg" className="imagen-logo" alt="imagen-logo" />
      </div>
      <div className="header-informacicon">
        <ul>
          <h2>API FOR WEATHER</h2>
        </ul>
      </div>
    </div>
  );
}

export default Header;
