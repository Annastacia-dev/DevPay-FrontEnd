import React from 'react'
import { Link } from 'react-router-dom';
const Description = () => {
  return (
    <><div>
      <h2 id='head'>
        The Developers Invoicing Solution
      </h2>
    </div><div id='button'>
        <Link to="/Services" className="btn1">Creat Invoice</Link>
      </div></>
      
  )
}

export default Description;


