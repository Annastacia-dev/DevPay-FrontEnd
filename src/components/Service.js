import React from 'react'

function Service() {
    return (

        <>

            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <form action="" >
                                <div className="row mt-4">
                                    {/* <!-- Service input --> */}
                                    <div className="col form-outline mb-4">
                                        <input type="text" id="form2Example1" className="form-control" />
                                        <label className="form-label" >Service name</label>
                                    </div>
                                    {/* <!-- service price--> */}
                                    <div className="col form-outline mb-4">
                                        <input type="number" id="form2Example1" className="form-control" />
                                        <label className="form-label" >Service price</label>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* <!-- Service input --> */}
                                    <div className="col form-outline mb-4">

                                        <select className="form-control" name="cars" id="cars">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <label for="cars">Select Developer:</label>

                                    </div>
                                </div>

                                    <div className="col form-outline mb-4">

                                        {/* <!-- service price--> */}

                                        <select className="form-control " name="cars" id="cars">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <label for="cars">Select a customer</label>

                                    </div>




                                    {/* <!-- Submit button --> */}
                                    <button type="submit" className="btn btn-primary btn-md mb-4">Create Invoice</button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>















        </>

    )
}

export default Service