import React, {useState,useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai"


function TableForm({
  description,
  setDescription,
  rate,
  setRate,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,


}) {

  const [isEditing, setIsEditing] = useState(false)

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(rate * price)
    }

    calculateAmount(amount)
  }, [amount, price, rate,setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })


  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !rate || !price) {
      alert("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        rate,
        price,
        amount,
      }
      setDescription("")
      setRate("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setRate(editingRow.rate)
    setPrice(editingRow.price)
  }

 // Delete function
 const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  return (
    <>
      <form onSubmit={handleSubmit}>

      <div className="flex flex-col md:mt-16">
        <label htmlFor="description">Work description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Work description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>


      <div className="md:grid grid-cols-3 gap-10 mt-4">
        <div className="flex flex-col">
          <label htmlFor="Rate">Rate</label>
          <input
            type="text"
            name="Rate"
            id="Rate"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="amount">Amount</label>
          <p>{amount}</p>
        </div>
      </div>
      <button type='submit' className="btn btn-primary mt-4 mb-3" onClick={handleSubmit}>{isEditing ? "Editing " : "Add Work"}</button>
      </form>

      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Rate</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            
          </tr>
        </thead>
        {list.map(({ id, description, rate, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{rate}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>            
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          $ {total}
        </h2>
      </div>
     
    
    </>


  )
}

export default TableForm