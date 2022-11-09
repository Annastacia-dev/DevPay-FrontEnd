import React from 'react';
import {  Link } from "react-router-dom";
const Invoice= () =>{
  return (
  <div id='invoice'>
    <button id='logo'>
      <Link to="/invoce">Create Invoice</Link>
    </button>
    </div>
  );
}
    export default Invoice