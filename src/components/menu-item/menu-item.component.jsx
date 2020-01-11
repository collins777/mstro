import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div
    className="menu-item"
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  >
    <div className="content">
      <span className="title">{title}</span>
      <span className="subtitle">Jan 19, 2018 &#8226; 82 </span>
    </div>
  </div>
);

export default MenuItem;
