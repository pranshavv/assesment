import React from "react";
import Card from "./Card";

const Cards = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "20px",
      marginLeft: "40px",
      width: "450px",
      rowGap: "20px",
      columnGap: "25px",
      color: "black",
      textAlign: "center",
    },
    h: {
      fontSize: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.h}>Choose Whoever You'd Like To Be</h1>
      <>
        <Card />
        <Card />
        <Card />
        <Card />
      </>
    </div>
  );
};

export default Cards;