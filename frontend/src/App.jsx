import React,{useState,useEffect} from "react";
import { useRef } from "react";
import "./App.css";
import img1 from "../public/nature.jpg";
const App = () => {
  const [file, setFile] = useState('');

  const fileInputRef = useRef();
  useEffect(()=>{
    const getImage= async()=>{
if(file){
  const data=new FormData();
  data.append("name",file.name)
  data.append("file",file);
   await uploadFile(data)
}
    }
    getImage()

  },[file])
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
        <input type="file"
                  onChange={(e) => setFile(e.target.files[0])}

        style={{ display: "none" }} ref={fileInputRef} />
      </div>
    </div>
  );
};

export default App;
