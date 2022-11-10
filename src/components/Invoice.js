
import React,{useState} from 'react'
import ClientDetails from './ClientDetails'
import Header from './Header'
import Dates from './Dates'
import Job from './Job'
import Footer from './Footer'
import Developer from './Developer'
import Table from './Table.js'
import '../css/App.css'
import TableForm from './TableForm'

function Invoice() {

    const [showInvoice, setShowInvoice] = useState(true)
    const [name, setName] = useState('Elon Musks')
    const [address, setAddress] = useState('Nairobi')
    const [email, setEmail] = useState('elon@gmail.com')
    const [phone, setPhone] = useState('-8889-98-87777')
    const [github, setGithub] = useState("htttps//spacex.com")
    const [bankName, setBankName] = useState('KCB')
    const [bankAccount, setBankAccount] = useState('34567754')
    const [clientName, setClientName] = useState('John Doe')
    const [clientAddress, setClientAddress] = useState('Kisumu')
    const [invoiceNumber, setInvoiceNumber] = useState('1234562')
    const [invoiceDate, setInvoiceDate] = useState('22/10/2022')
    const [dueDate, setDueDate] = useState('30/11/2022')
    const [job, setJob] = useState('Awesome')
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")

    const handlePrint = () => { window.print() }
    return (
        <>
            <main className='m-5 p-5  max-w-4xl mx-auto bg-white  rounded shadow'>

                {
                    showInvoice ? (
                        <div>
                            <Header handlePrint={handlePrint} />
                            <Developer name={name} address={address} />
                            <ClientDetails clientName={clientName} clientAddress={clientAddress} />
                            <Dates invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate} />
                            < Table description={description}  rate={rate} price={price} amount={amount}/>
                            <Job notes={job} />
                            <Footer
                                name={name}
                                email={email}
                                address={address}
                                bankName={bankName}
                                backAccount={bankAccount}
                                phoneNumber={phone}
                            />

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
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </article>
                                <article className="md:grid grid-cols-3 gap-10 mt-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="email">Enter your email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="website">Enter your github</label>
                                        <input
                                            type="url"
                                            name="website"
                                            id="website"
                                            placeholder="Enter your website"
                                            autoComplete="off"
                                            value={github}
                                            onChange={(e) => setGithub(e.target.value)}
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
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
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

                                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                                    <div className="flex flex-col">
                                        <label htmlFor="clientName">Enter your client's name</label>
                                        <input
                                            type="text"
                                            name="clientName"
                                            id="clientName"
                                            placeholder="Enter your client's name"
                                            autoComplete="off"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="clientAddress">
                                            Enter your client's address
                                        </label>
                                        <input
                                            type="text"
                                            name="clientAddress"
                                            id="clientAddress"
                                            placeholder="Enter your client's address"
                                            autoComplete="off"
                                            value={clientAddress}
                                            onChange={(e) => setClientAddress(e.target.value)}
                                        />
                                    </div>
                                </article>

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