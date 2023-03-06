import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0, 28, 38)";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <About /> */}
      <div className="container my-5">
        <TextForm heading = "Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
