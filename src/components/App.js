import React,{useEffect,useState} from 'react'
import { Route,Routes} from "react-router-dom";
import Navlink from './Navlink';
// import Home from './Home';
import About from './About';
import Service from './Service'; 
import SignIn from './SignIn';
import SignUp from './SignUP'
import Description from './Description';
import '../css/App.css'
import Footer from './Footer';
import Home from './Home';

function App () {


  const [currentUser, setCurrentUser] = useState(null)

  const changeUser = (user) => {
    setCurrentUser(user)
  }

  // Set developer as user , fetch user from database https://9292/developers

  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/developers')
      .then(response => response.json())
      .then(data => setDevelopers(data))
  }, [])

  return (
    
    <div>
    
     < Navlink/>
     < Footer />
      <Routes>
<<<<<<< HEAD
        <Route path='/home' element={<Home />} ></Route>
        <Route path="/" exact component={Home} />
        <Route path='/services' element={<Service />} ></Route>
        <Route path='/about' element={<About />} ></Route>
=======
         <Route  path='/home' element={<Home />} ></Route>
        <Route  path='/' element={<Home />} ></Route>
        <Route  path='/about' element={<About />} ></Route>
>>>>>>> 409db39d6fa83742ff9c89f38add8b83c6cf7788
        <Route path="/signin" element={<SignIn changeUser={changeUser} />} />
        <Route path="/signup" element={<SignUp />} />      
        {/* {
          developers.map(dev => {
            return <Route key={dev.id} path={`/${dev.id}/service`} element={<Service dev={dev}  />} />
          }
          )
        } */}
      </Routes>  
    </div>
  )
}

export default App
