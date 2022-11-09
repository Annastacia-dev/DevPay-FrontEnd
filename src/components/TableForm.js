import React from 'react'

function TableForm({
    description,
    setDescription,
    rate,
    setRate,
    price,
    setPrice,
    amount,
    setAmount,



}) {

    const calculateAmount = (amount)=>{
        setAmount(rate * price)
    }
    return (
        <>
        
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
            <p>{ calculateAmount(amount)}</p>
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        </>
     

        




    )
}

export default TableForm