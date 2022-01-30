import React, {useState} from "react";
import Clickbutton from "./components/clickbutton"; 
import Customlistview from "./components/Listview";
import './App.css'; 
import axios from "axios";
import FormData from "form-data";


function App() {

  const [fileName, setFileName] = useState([])

  const sayHello = () => {
    console.log("Hello"); 
  }; 
  

  const uploadFunction = (e) => {
    const files = e.target.files; 
    const reader = new FileReader();
    const data  = new FormData();  
    reader.readAsDataURL(files[0]); 
    reader.onload = (e) => {
      const url = "http://localhost:9000/uploadPhoto"; 
      data.append('file', files[0]); 
      const header = {
        "Content-Type": "text/html; charset=utf-8",  
      }
      axios.post(url, data, {headers: header}); 
    }
  }

  const getImages = () => {
    const url = "http://localhost:9000/getImages"; 
    axios.get(url).then((res) => {
      console.log(`status ${res.status}`); 
      if (res.status == 200) {
        setFileName(JSON.stringify(res.data)); 
      }
    }); 
  }

  return (
    <div className="app">
      <h1>Hello Efeed</h1>
      <input type="file" name="file" onChange ={uploadFunction}/>
      <Clickbutton buttontitle="Get Images" onclickfunction={getImages}/>
      <Customlistview fileName={fileName} />
    </div>
  );
}

export default App; 
