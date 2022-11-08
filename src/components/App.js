import React from 'react'
import { Route,Routes} from "react-router-dom";
import Navlink from './Navlink';
import  './App.css';
import Home from './Home';
import About from './About';
import Service from './Service'; 
import LogIn from './LogIn';
import SignUp from './SignUp';



function App () {
  return (
    <div>
    
     < Navlink/>
      <Routes>
         <Route exact='true' path='/home' element={<Home />} ></Route>
        <Route exact='true' path='/' element={<Home />} ></Route>
        <Route exact='true' path='/about' element={<About />} ></Route>
        <Route exact='true' path='/service' element={<Service />} ></Route>
        <Route exact='true' path='/login' element={<LogIn />} ></Route>
        <Route exact='true' path='/signup' element={< SignUp />} ></Route>
      </Routes>  
    
      




    </div>
  )
}

export default App