import { useState } from "react";
const Footer = () => {
  const [name, setName] = useState(`Copy Right 2023 swiGker`);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:"fixed",
        bottom:"0",
        zIndex:"9999",
        width:"100%",

      }}
    >
      <div
        style={{
          fontSize: "1rem",
          padding: "20px 5px",
          width:"25rem",
          height:"5vh",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
        className="font"
      >
        {name}
      </div>
      <button
        style={{
          cursor: "pointer",
          padding: "2px 20px",
          border: "none",
          backgroundColor: "#8BF5FA",
          borderRadius: "4px",
          fontSize:"0.8rem",
        }}
        onClick={() => {
          name === "Copy Right 2023 swiGker"
            ? setName("Namaste, I am Ayush  Shrivastav")
            : setName("Copy Right 2023 swiGker"); //logic
        }}
      >
        Click Me!!
      </button> 
    </div>
      //toogle functionality for footer
  );
};

export default Footer;
