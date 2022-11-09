import React, { useEffect } from 'react'

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

  



}) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      description,
      rate,
      price,
      amount
    }
    setDescription("")
    setRate("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    console.log(list)
    
  }
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(rate * price)
    }
    calculateAmount(amount)
  }, [amount, price, rate, setAmount])
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

        <div className="mt-3 mb-3">
        <button  className ="  btn btn-primary-success" type='submit'>workload</button>
        </div>
     
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

export default TableForm