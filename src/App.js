// import React from 'react';
// import './App.css';
import Description from './components/Description';
// import Footer from './components/Footer';
// import Navlink from './components/Navbar';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import { Navlink } from 'react-bootstrap';
// // import { Router } from 'react-router-dom';


// function App() {
//   return (
//     <> 
//     <div>
//       <Navlink />
//       <Description />

//     </div>
//     <div>
//     <Footer />
//     </div>
//     </>

import React from 'react'
import { BrowserRouter} from "react-router-dom";
import Navlink from './components/Navlink';
import Footer from './components/Footer';

function App () {
  return (
    <div>
     <BrowserRouter>
     <Navlink/>
     <Description />
     <Footer />
      {/* <Routes>
        <Route exact='true' path='/home' element={<Home />} ></Route>
        <Route exact='true' path='/' element={<Home />} ></Route>
        <Route exact='true' path='/about' element={<About />} ></Route>
        <Route exact='true' path='/service' element={<Service />} ></Route>
        <Route exact='true' path='/signup' element={<SignUP />} ></Route>
      </Routes>  */}
     </BrowserRouter>
     </div>
  
    
  );
}

export default App;
