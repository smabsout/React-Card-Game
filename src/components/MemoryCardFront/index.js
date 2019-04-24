import React from "react";
import "./style.css";

function MemoryCardFront(props) {
  return (
      <div className="card">
          <div
              className="img-container"
              onClick={() => props.selectCard(props.id)}
          >
              <img alt={props.name} src={props.image} />
          </div>
      </div>
  );
}

export default MemoryCardFront;
