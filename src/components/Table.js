import React from 'react'

function Table({description,rate,price,amount}) {
  return (
    <>
    <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Rate</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
      <tbody>
      <tr>
       <td>{description}</td>
       <td>{rate}</td>
       <td>{price}</td>
       <td>{amount}</td>
      </tr>


      </tbody>

    </table>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Table