import React from "react";

export default ({ isActive, text, onClick }) => {
  return (
      <li className={`nav-item ${isActive ? 'active' : ''}`}>
        <a className="nav-link" href="#" onClick={onClick}>{text}</a>
      </li>
  )
}
