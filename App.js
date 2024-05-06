import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'; 
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
<>
{/* <Router> */}
<Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/> 
<div className="container my-3"> 
{/* <Switch>
  <Route exact path="/about">
    <About />
  </Route>
  <Route exact path="/">
     
  </Route>
</Switch> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
</div>
{/* </Router> */}
</>
  );
}

export default App;
