import { useState } from 'react'
import React from 'react'
import ClientDetails from './ClientDetails'
import Header from './Header'
import Dates from './Dates'
import Notes from './Notes'
import Footer from './Footer'
import Developer from './Developer'


function Service() {  
    const [showInvoice,setShowInvoice] = useState(false)


    const handlePrint =() => { window.print()}
    return (
        <>
            <main className='m-5 p-5  max-w-4xl mx-auto bg-white  rounded shadow'>
            <div>
                        <Header handlePrint = {handlePrint}/>
                        <Developer />
                        <ClientDetails />
                        <Dates />
                        <Notes />
                        <Footer />
                        </div>

                {/* {
                    showInvoice  ? (
                        <div>
                        <Header handlePrint = {handlePrint}/>
                        <Developer />
                        <ClientDetails />
                        <Dates />
                        <Notes />
                        <Footer />
                        </div>
                    ) :(

                      <input
                        type="text"
                        name="text"
                        id= "text"
                        placeholder='Enter your name'
                        autoComplete='off'




                    )
                } */}

                        
                    
                
              
                
            </main>


        </>
    )

}

export default Service