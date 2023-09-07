import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// // import About from './components/About';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [redmode, setredMode] = useState('light'); // red mode usestate


  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title="Rameezistan - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enabled", "success");
      document.title="Rameezistan - Light Mode"

    }
  }

  // for red mode
  const redtoggleMode = ()=>{
    if(redmode === 'danger'){
      setredMode('light')
      document.body.style.backgroundColor= 'White';
      showAlert("Light mode is enabled", "success");
      document.title="Rameezistan - Light Mode"

    }
    else{
      setredMode('danger')
      document.body.style.backgroundColor= '#ee6b6e';
      showAlert("Red mode is enabled", "success");
      document.title="Rameezistan - Red Mode"


    }
  }
// end of red mode

  return(
    <>
    {/* <Router> */}
<Navbar title='Rameezistan' mode={mode} toggleMode={toggleMode} redtoggleMode={redtoggleMode}/>
<Alert alert={alert}/>
   <div className="container my-3">
    {/*  <Routes>
              <Route exact path="/about" element={<About />} /> */}
              {/* <Route exact path="/" element={ }>*/}

              <TextForm showAlert={showAlert} heading="Enter something to analyze" mode={mode} />
    {/* </Routes> */}
    </div>
    {/*</Router> */} 
    </>
  );
}

export default App;