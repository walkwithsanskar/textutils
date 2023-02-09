import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")//weather dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
       {/* <Navbar title="For Blog" aboutText="For Textutils"></Navbar> */}
      {/* <div className='container my-30'>
        <Textform heading="Enter the text to analyze"  mode={mode}/>
        </div> */}
      {/* <About/> */}
       <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
       
        <Routes>
            <Route  path='/about' element={<About/>}>
                
            </Route>
            <Route  path='/' element={<Textform/>}>
                
            </Route>
        </Routes>
       </Router>
       
    </>
  );
}

export default App;
