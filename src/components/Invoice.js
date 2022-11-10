
import React, { useState } from 'react'
import ClientDetails from './ClientDetails'
import Header from './Header'
import Dates from './Dates'
import Job from './Job'
// import Footer from './Footer'
import Developer from './Developer'
import Table from './Table.js'
import '../css/App.css'
import TableForm from './TableForm'

function Invoice({ dev }) {

    const [showInvoice, setShowInvoice] = useState(false)
    const [bankName, setBankName] = useState('KCB')
    const [bankAccount, setBankAccount] = useState('34567754')
    const [invoiceNumber, setInvoiceNumber] = useState('1234562')
    const [invoiceDate, setInvoiceDate] = useState('22/10/2022')
    const [dueDate, setDueDate] = useState('30/11/2022')
    const [job, setJob] = useState('Awesome')
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")
   const  [list, setList] = useState([])

    const [client, setClient] = useState({
        name: '',
        email: '',
        phone_number: '',
        location: '',
        developer_id: dev.id
    })
    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })
            .then(response => response.json())
            .then(data => console.log(data))
        setClient({
            name: '',
            email: '',
            phone_number: '',
            location: '',
            developer_id: dev.id
        })
    }

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }



    const handlePrint = () => { window.print() }
    return (
        <>
            <main className='m-5 p-5  max-w-4xl mx-auto bg-white  rounded shadow'>

                {
                    showInvoice ? (
                        <div>
                            {/* Developer's Details */}

                            <Header handlePrint={handlePrint} />
                            <Developer name={dev.name} address={dev.location} />
                            <ClientDetails clientName={client.name} clientAddress={client.location} />
                            <Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate} />
                            < Table description={description} rate={rate} price={price} amount={amount}  list={list}/>
                            <Job notes={job} />
                            {/* <Footer
                                name={dev.name}
                                email={dev.email}
                                address={dev.location}
                                bankName={bankName}
                                backAccount={bankAccount}
                                phoneNumber={dev.phone_number}
                            /> */}

                            <button onClick={() => setShowInvoice(false)}
                                className=" mt-3 bg-blue-500 text-white  font-bold py-2 px-8 roundend shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit</button>
                        </div>
                    ) : (
                        <>


                            <div className='flex flex-col justify-center'>
                                <article className="md:grid grid-cols-2 gap-10">
                                    <div className="flex flex-col">
                                        <label htmlFor="name">Your full name</label>
                                        <input
                                            type="text"
                                            name="text"
                                            id="name"
                                            placeholder="Enter your name"
                                            autoComplete="off"
                                            value={dev.name}

                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="address">Enter your address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="Enter your address"
                                            autoComplete="off"
                                            value={dev.location}

                                        />
                                    </div>
                                </article>
                                <article className="md:grid grid-cols-2 gap-10 mt-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="email">Enter your email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                            value={dev.email}

                                        />
                                    </div>



                                    <div className="flex flex-col">
                                        <label htmlFor="phone">Enter your phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Enter your phone"
                                            autoComplete="off"
                                            value={dev.phone_number}

                                        />
                                    </div>
                                </article>
                                <article className="md:grid grid-cols-2 gap-10 mt-3 ">
                                    <div className="flex flex-col">
                                        <label htmlFor="bankName">Enter your bank name</label>
                                        <input
                                            type="text"
                                            name="bankName"
                                            id="bankName"
                                            placeholder="Enter your bank name"
                                            autoComplete="off"
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="bankAccount">
                                            Enter your bank account number
                                        </label>
                                        <input
                                            type="text"
                                            name="bankAccount"
                                            id="bankAccount"
                                            placeholder="Enter your bank account number"
                                            autoComplete="off"
                                            value={bankAccount}
                                            onChange={(e) => setBankAccount(e.target.value)}
                                        />
                                    </div>
                                </article>


                                {/* Clients details */}
                                <article className=" gap-10 md:mt-16">

                                    <form  onSubmit={handleSubmit}>
                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="clientName">Enter your client's name</label>
                                        <input name="name" type="text" placeholder="Name" autoFocus={true} value={client.name} onChange={handleChange} />
                                    </div>


                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="">
                                            Enter your client's Email
                                        </label>
                                        <input name="email" type="text" placeholder="Email" autoFocus={true} value={client.email} onChange={handleChange} />
                                    </div>   


                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="client Phone Number">
                                            Enter your client's Phone Number
                                        </label>
                                        <input name="phone_number" type="text" placeholder="Phone Number" autoFocus={true} value={client.phone_number} onChange={handleChange} />
                                    </div>

                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="clientAddress">
                                            Enter your client's location
                                        </label>
                                        <input name="location" type="text" placeholder="Location" autoFocus={true} value={client.location} onChange={handleChange} />
                                       
                                    </div>


                                    <div className="flex flex-col mb-3">
                                        <label htmlFor="clientAddress">
                                            Developer Id
                                        </label>
                                        <input name="number" type="number" placeholder="Developer_id" autoComplete='true' value={dev.id}  />
                                    </div>
                                    <button type='submit' className="btn btn-success" onClick={handleSubmit}>Post</button>
                                    </form>           
                                </article>  
                               






                                {/* Invoice Details  */}

                                <article className="md:grid grid-cols-3 gap-10 mt-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="invoiceNumber">Invoice Number</label>
                                        <input
                                            type="text"
                                            name="invoiceNumber"
                                            id="invoiceNumber"
                                            placeholder="Invoice Number"
                                            autoComplete="off"
                                            value={invoiceNumber}
                                            onChange={(e) => setInvoiceNumber(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="invoiceDate">Invoice Date</label>
                                        <input
                                            type="date"
                                            name="invoiceDate"
                                            id="invoiceDate"
                                            placeholder="Invoice Date"
                                            autoComplete="off"
                                            value={invoiceDate}
                                            onChange={(e) => setInvoiceDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="dueDate">Due Date</label>
                                        <input
                                            type="date"
                                            name="dueDate"
                                            id="dueDate"
                                            placeholder="Invoice Date"
                                            autoComplete="off"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
                                    </div>





                                </article>

                                <article>
                                    <TableForm
                                        description={description}
                                        setDescription={setDescription}
                                        rate={rate}
                                        setRate={setRate}
                                        price={price}
                                        setPrice={setPrice}
                                        amount={amount}
                                        setAmount={setAmount}
                                        list={list}
                                        setList={setList}

                                    />
                                </article>

                                                                 

                                <label htmlFor="job">Job Description</label>
                                <textarea
                                    type="job"
                                    name="job"
                                    id="job"
                                    cols="30"
                                    rows="10"
                                    autoComplete='off'
                                    placeholder='Enter your work description'
                                    value={job}
                                    onChange={(e) => setJob(e.target.value)}>

                                </textarea>
                               

                                <button onClick={() => setShowInvoice(true)}
                                    className="bg-blue-500 text-white  font-bold py-2 px-8 roundend shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview</button>

                            </div>

                        </>


                    )}

            </main>


        </>
    )

}


export default Invoice