import { useState } from "react";
const Footer = () => {
  const [name, setName] = useState(`Copy Right 2023 swiGker`);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "10vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border:"1px solid red",
        
        
        
      }}
    >
      <div
        style={{
          fontSize: "1.3rem",
          padding: "10px",
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
          marginLeft: "40px",
          cursor: "pointer",
          width: "90px",
          padding: "3px",
          border: "none",
          backgroundColor: "#8BF5FA",
          borderRadius: "4px",
          fontSize:"1rem"
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
