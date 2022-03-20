
 import React,  { useState } from 'react';
 import "./App.css";
import Alert from './components/Alert';
 //import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled or not
  const[alert, setAlert]=useState(null);

   const showAlert =(message ,type)=>{
   setAlert({
  msg:message,
  type:type
   })
   setTimeout(() => {
     setAlert(null);
     
   }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = ' TextUtils is Amazing Now';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install  TextUtils  Now';
      // },1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <Switch> */}
       {/* /users>---->components-1
      users/home----->----->components-2  */}
           {/* <Route   path="/about">
            <About />
          </Route> */}
          
          {/* <Route  path="/"> */}
          <TextForm showAlert={showAlert}heading="enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch>  */}
      

     </div>
     {/* </Router>   */}
     
  
      
      {/* <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'> 
      <TextForm showAlert={showAlert}heading="Enter The Text To Analyze Below" mode={mode}/>
      </div> */}
     </> 
    
  );
}

export default App;
