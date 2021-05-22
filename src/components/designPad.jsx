import React from "react";
import "./pad.css";

const DesignPad = (props) => {
    const drop = (ev) => {
        ev.preventDefault();
        // transfer the id between this event, get the element and append it to the board
        const cardId = ev.dataTransfer.getData("cardId");
        const card = document.getElementById(cardId);
        card.style.display = "block";
        ev.target.appendChild(card);
      };

      const allowDrop = ev => {
          ev.preventDefault();
      }

  return (
    <div
      className="designPad"
      id={props.id}
      onDrop={drop}
      draggable='false'
      onDragOver={allowDrop}
    >
      {props.children}
  
    </div>
  );
};
export default DesignPad;
