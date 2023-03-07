import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //alert here is an object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0, 28, 38)";
      showAlert("Dark Mode is enabled", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <About /> */}
      <div className="container my-5">
        <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
