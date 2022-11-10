// import React from 'react'

// function Home (){
//   return (
//     <h1>Home</h1>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom';
import Service from './Service';
import SignUp from './SignUP';
const Home = () => {
  return (
    <><><div>
      <h2 id='head'>
        The Developers Invoicing Solution
      </h2>
    </div><div id='button'>
        <Link to="/SignUp" className="btn1">Creat Invoice</Link>
      </div></></>
      
  )
}

export default Home;
