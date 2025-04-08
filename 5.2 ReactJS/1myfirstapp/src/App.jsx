import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First App </h1>
      <h2>Hello Everyone, 👋(windows + . )</h2>
      <div className="main" >
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/31013e217005573.Y3JvcCwxNzI5LDEzNTIsMTE5LDE4NA.png" alt="shinchain" height="200"/>
        <p>This is my first project in react using vite</p>
      </div>
    </>
  );
}

export default App;
