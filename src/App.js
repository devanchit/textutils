import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40"
      showalert("Dark mode enabled","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }

  }

  return (
    <>

      <Router>
      <Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert}/>}
      <div className="container my-3">
      <Routes>
      <Route path="/about" element={<About/>} />

      <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text" mode={mode}/>}/>
          
      </Routes>
      </div>
      </Router>
      
      
    </>
  );
}

export default App;
