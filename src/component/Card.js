import React from "react";

const Card = () => {
  return (
    <div
      style={{
        width: "185px",
        height: "180px",
        padding: "8px",
        backgroundColor: "blue",
        boxShadow: "2px 2px grey",
        borderRadius: "0.375rem",
        
      }}
    >
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis
        repellendus nesciunt culpa error modi.
      </p>
    </div>
  );
};

export default Card;