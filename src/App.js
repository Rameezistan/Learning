import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [redmode, setredMode] = useState('light');


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
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enabled", "success");

    }
  }

  // for red mode
  const redtoggleMode = ()=>{
    if(redmode === 'light'){
      setredMode('danger')
      document.body.style.backgroundColor= 'White';
      showAlert("Light mode is enabled", "success");
    }
    else{
      setredMode('light')
      document.body.style.backgroundColor= '#ee6b6e';
      showAlert("Red mode is enabled", "success");

    }
  }


  return(
    <>
<Navbar title='Rameezistan' mode={mode} toggleMode={toggleMode} redtoggleMode={redtoggleMode}/>
{/* <Alert alert={alert}/> */}

<div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter something to analyze" mode={mode} />
    {/* <About /> */}
</div>
    </>
  );
}

export default App;