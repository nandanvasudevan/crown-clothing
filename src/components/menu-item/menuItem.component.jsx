import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, subTitle }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subTitle">{subTitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
