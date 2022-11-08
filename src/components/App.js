import React from 'react'
import { BrowserRouter} from "react-router-dom";
import Navlink from './Navlink';
// import  './App.css';
// import Home from './Home';
// import About from './About';
// import Service from './Service'; 
// import SignUp from './SignUp';


function App () {
  return (
    <div>
     <BrowserRouter>
     < Navlink/>
      {/* <Routes>
         <Route exact='true' path='/home' element={<Home />} ></Route>
        <Route exact='true' path='/' element={<Home />} ></Route>
        <Route exact='true' path='/about' element={<About />} ></Route>
        <Route exact='true' path='/service' element={<Service />} ></Route>
        <Route exact='true' path='/signup' element={<SignUP />} ></Route>

      </Routes>  */}
     </BrowserRouter>
      




    </div>
  )
}

export default App