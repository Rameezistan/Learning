import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      setAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      setAlert("Light mode is enabled", "success");

    }
  }
  return(
    <>
<Navbar title='Rameezistan' mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
    <TextForm heading="Enter something to analyze" mode={mode} />
    {/* <About /> */}
</div>
    </>
  );
}

export default App;