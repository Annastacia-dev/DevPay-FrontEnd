import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


function ClientForm() {

    const [client, setClient] = useState({
        name: '',
        email: '',
        phone_number: '',
        location: '',
        developer: '',


    })
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
            developer: '',
        })


    }
    const handleChange = (e) => {
        setClient({
             ...client,
             [e.target.name]: e.target.value
         })
        }
    //     const newdata = [...client]
    //     newdata[e.target.name] = e.target.value
    //     setClient(newdata)
    //     console.log(newdata)
    // }










    return (
        <div>
            <div>
                <div className="row  mt-4">
                    <div className="col-md-6 offset-3">
                         <form >

                            <div className="form-outline mb-4">
                                <label className="form-label  mr-3" >Full name</label>
                                <input name="name" type="text" id="form2Example1" className="form-control"  autoFocus={true} placeholder="Name" value={client.name} onChange={handleChange} />
                                

                            </div>

                            <div className="form-outline mb-4 ">
                                <label className="form-label mr-3" >Email address</label>
                                <input name="email" type="email" id="form2Example1" className="form-control"  autoFocus={true} placeholder="Name" value={client.email} onChange={handleChange} />

                                

                            </div>


                            <div className="form-outline mb-4 mr-3">
                                <label className="form-label mr-3" >Phone Number</label>
                                <input name="phone_number" type="number" id="form2Example1" className="form-control"  autoFocus={true} placeholder="Name" value={client.phone_number} onChange={handleChange} />

                            </div>

                            <div className="form-outline mb-4 mr-3">
                                <label className="form-label mr-3 " >Location</label>
                                <input name="location" type="text" id="form2Example1" className="form-control"  autoFocus={true} placeholder="Name" value={client.location} onChange={handleChange} />


                                
                            </div>

                            {/* <div className="col form-outline mb-4 mr-3">
                                <label className="form-label mr-3 " >Select a developers</label>
                                <input name="developer_id" type="number" id="form2Example1" className="form-control"  autoFocus={true} placeholder="Name" value={client.developer} onChange={handleChange} />


                            </div> */}

                                <div className="col form-outline mb-4">
                                            <select className="form-control " name="cars" id="cars">
                                                <option value="volvo">Front end</option>
                                                <option value="saab">BackEnd</option>
                                                <option value="mercedes">Full stack</option>
                                                <option value="audi">Games</option>
                                            </select>
                                            <label for="cars">Choose a developer</label>

                                 </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4" onSubmit={handleSubmit}> Register </button>

                            <button type="submit" className="btn btn-primary btn-block mb-4"> Register </button>


                           


                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label className="form-check-label" > Remember me </label>
                                    </div>
                                </div>


                            </div>





                            <div className="text-center">
                                <p>Already a a member? <a href="login">Login</a></p>
                                <p>or sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </form> 
                    </div>
                </div>

            </div>
        </div>
       

     








        
       

    )
}

export default ClientForm

{/* <div>
        
// <form className="sign-in-form" style={{ marginTop: "50px" }}>
//     <h1>Register</h1>
//     <div className="input-field">
//         <input name="name" type="text" placeholder="Name" autoFocus={true} value={client.name} onChange={handleChange} />
//         <input name="email" type="text" placeholder="Email" autoFocus={true} value={client.email} onChange={handleChange} />
//         <input name="phone_number" type="text" placeholder="Phone Number" autoFocus={true} value={client.phone_number} onChange={handleChange} />
//         <input name="location" type="text" placeholder="Location" autoFocus={true} value={client.location} onChange={handleChange} />
//          <input name="developer" type="number" placeholder="developerid" autoFocus={true} value={client.developer} onChange={handleChange} />
         
//          <button type="submit" className="btn btn-primary btn-block mb-4"  onSubmit={handleSubmit}> Register </button>    
        
//     </div>
// </form>

// </div> 
 */}
