import React from 'react'

function Table({list}) {
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
        {list.map(({  id, description, rate, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{rate}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>

              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  )
}

export default Table