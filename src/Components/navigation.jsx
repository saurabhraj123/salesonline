import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/navigation.css";

const Navigation = ({total}) => {

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  }

  const handleHomeClick = () => {
    navigate('/');
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="lang">EN</span>
        <input type="text" />
        {/* <faMagnifyingGlass /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
      <div className="nav-center" onClick={handleHomeClick}>E-Commerce</div>
      <div className="nav-right">
        <span>
          <a href="">Register</a>
        </span>
        <span>
          <a href="">Sign In</a>
        </span>
        <span>
          <a href="" onClick={handleCartClick}>Cart({total})</a>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
