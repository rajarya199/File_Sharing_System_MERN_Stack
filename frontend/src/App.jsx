import React from "react";
import { useRef } from "react";
import "./App.css";
import img1 from "../public/nature.jpg";
const App = () => {
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="container">
      <img src={img1} alt="banner" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file" style={{ display: "none" }} ref={fileInputRef} />
      </div>
    </div>
  );
};

export default App;
