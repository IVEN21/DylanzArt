import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSortUp } from "@fortawesome/free-solid-svg-icons";
function navbar(props) {
  return (
    <div className="navbar">
      <span>
        DylanzArt
        <FontAwesomeIcon
          icon={faPencilAlt}
          style={{ fontSize: "35px", color: "#bae0d3", margin: "0 0 7px 7px" }}
        />
      </span>
      <div className="navbar_center">
        <NavLink to="#">
          About Author
          <FontAwesomeIcon icon={faSortUp} />
        </NavLink>
        <NavLink to="#">Product</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
      <span>Log In</span>
    </div>
  );
}

export default navbar;
