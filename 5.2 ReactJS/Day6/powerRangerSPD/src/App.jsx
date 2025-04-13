import React from "react";
import "./App.css";

const App = () => {
  const name = "aditya";
  const styles = {
    h2: {
      backgroundColor: "black",
      color: "white",
    },
    button: {
      borderRadius: "20px",
      padding: "10px",
      backgroundColor: "black",
      color: "white",
    },
    specialButton: {
      FontSize: "48px",
    },
  };

  return (
    <div className="mycomp">
      <img src="doremon.jpg" alt="Doremon" height="200px" />
      <h1 style={{ backgroundColor: "red", color: "blue" }}>
        Hello All, I'm {name}
      </h1>
      <h2 style={styles.h2}>I'm a Web Developer</h2>
      <button style={styles.button}>Click Me</button>
      <button style={{ ...styles.specialButton, ...styles.button }}>
        specialButton
      </button>
    </div>
  );
};

export default App;
