import React from "react";
// star, bell, heart down arrow, note pad
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faBell,
  faChevronDown,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import "./menu-item.styles.scss";

const starIcon = <FontAwesomeIcon icon={faStar} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const bellIcon = <FontAwesomeIcon icon={faBell} />;
const chevronDownIcon = <FontAwesomeIcon icon={faChevronDown} />;
const bookIcon = <FontAwesomeIcon icon={faBook} />;

const MenuItem = ({ title, imageUrl }) => (
  <div
    className="menu-item"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${imageUrl})`
    }}
  >
    <div className="content">
      <span className="title">{title}</span>
      <span className="subtitle">
        <div className="subtitle-left">
          {" "}
          Jan 19, 2018 &#8226;
          {starIcon}82
        </div>

        <div className="subtitle-right">
          {bookIcon}
          {heartIcon}
        </div>
      </span>
    </div>
  </div>
);

export default MenuItem;
