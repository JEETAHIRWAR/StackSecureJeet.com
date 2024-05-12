import React from "react";
import "./card.scss";

function Card({ children }) {
  return (
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
