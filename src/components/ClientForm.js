import React from 'react'

function ClientForm() {
    return (
        <div>
            <div>
                <div className="row  mt-4">
                    <div className="col-md-6 offset-3">
                        <form>

                            <div className="form-outline mb-4">
                                <input type="text" id="form2Example1" className="form-control" />
                                <label className="form-label" for="form2Example1">Full name</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="form2Example1" className="form-control" />
                                <label className="form-label" >Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="phone" id="form2Example2" className="form-control" />
                                <label className="form-label" >Phone Number</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="Location" id="form2Example2" className="form-control" />
                                <label className="form-label" >Location</label>
                            </div>

                            <div className="col form-outline mb-4">
                                <select className="form-control " name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <label for="cars">Select a developers</label>

                            </div>

                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label className="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                </div>


                            </div>


                            <button type="button" className="btn btn-primary btn-block mb-4">Register</button>


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