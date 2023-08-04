import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Card = () => {
  return (
    <div
      style={{
        width: "185px",
        height: "auto",
        padding: "8px",
        backgroundColor: "lightpink",
        boxShadow: "2px 2px grey",
        borderRadius: "0.375rem",
        overflow: "hidden"
        
      }}
    >
        <FaUserCircle style={{ width: "30px", height: "30px" }} />
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis
      </p>
    </div>
  );
};

export default Card;