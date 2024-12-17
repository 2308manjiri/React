
import React , { useState } from 'react';
import './App.css';
//import About from './components/About';

import Navbar from './components/Navbar';
import Textform2 from './components/Textform2';
import Alert from './components/Alert';

//import {
  //BrowserRouter as Router,
 // Switch,
 // Route,
  
//} from "react-router-dom";



function App() {
  const [mode ,setmode] = useState('light');
  const [alert ,setAlert] = useState('');

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type :type
    })

  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert('dark mode has been enabled','success');
    }
    else{
      
      setmode('light')
      document.body.style.backgroundColor ='white';
      showAlert('light mode has been enabled','success');
    }
  }
  return (
    <>
    {/*<Router>*/}
    {/*Navbar title="Textutils" aboutText="about Textutils"/>*/}
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} />
    <div className="container my-3">
    {/*<Switch>
          <Route path="/about">
            <About />
          </Route>*/}
          
          {/*<Route path="/">*/}
          <Textform2 showAlert={showAlert} heading ='Enter the text to analyze' mode={mode}/>
         {/* </Route>*/}
       {/* </Switch>*/}
     
    
       </div>
        {/*</Router>*/}

       </>
  );

  
  
}

export default App;
