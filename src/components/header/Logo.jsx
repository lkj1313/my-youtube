import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <h1 className="header_logo">
      <Link to="/">
        <em aria-hidden="true"></em>
        <span>
          webs
          <br />
          youtube
        </span>
      </Link>
    </h1>
  );
};
