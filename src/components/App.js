// import React from 'react'
import React, { useState } from 'react';
import { Route,Routes} from "react-router-dom";
import Navlink from './Navlink';
import Home from './Home';
import About from './About';
import Service from './Service'; 
<<<<<<< HEAD
import LogIn from './LogIn';
import SignUp from './SignUp';
import '../css/App.css'

=======
import { Login } from "./Login";
import { Signup } from "./Signup";
>>>>>>> dev




function App () {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  

  return (
    

    <div>
    
     < Navlink/>
      <Routes>
         <Route exact='true' path='/home' element={<Home/>}></Route>
        <Route exact='true' path='/' element={<Home/>}></Route>
        <Route exact='true' path='/about' element={<About />}></Route>
        <Route exact='true' path='/service' element={<Service/>}></Route>
        <Route exact='true' path='/login' element={<Login/>}></Route>
        <Route exact='true' path='/signup' element={< Signup />} ></Route>
      </Routes>  
    
 
    </div>
  );
}

export default App