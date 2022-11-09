import React from 'react'

function Footer({ name, email, address, bankName, bankAccount,phoneNumber }) {
    return (
        <>
             <footer className="footer border-t-2 border-gray-300 pt-5">
                <ul className='flex flex-wrap items-center justify-center'>
                    <li><span className="font-bold">Name:</span>{name}</li>
                    <li> < span className="font-bold">Email:</span>{email}</li>
                    <li> <span className="font-bold">Address</span>{address}</li>
                    <li> <span className="font-bold">Phone:</span>{phoneNumber}</li>
                    <li> < span className="font-bold">Bank:</span>{bankName}</li>
                    <li> <span className="font-bold">Bank Account:</span>{bankAccount}</li>
                   

                </ul>
               



            </footer>


        </>
    )
}

export default Footer