import React from "react";
import { snsLink } from "../../data/header.js";

const Sns = () => {
  return (
    <div className="header_sns">
      <ul>
        {snsLink.map((sns, key) => {
          return (
            <li key={key}>
              <a
                href={sns.url}
                target="_black"
                rel="noopener noreferrer"
                aria-label={sns.title}
              >
                {sns.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sns;
