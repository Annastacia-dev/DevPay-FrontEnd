import React from 'react'

function Service() {
    return (
        <div>
            <div>
                <section className="inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <form >
                                    <div className="row">

                                        <div className="col form-outline mb-4 mt-4">
                                            <input type="text" id="form2Example1" className="form-control" />
                                            <label className="form-label" for="form2Example1">Service name</label>
                                        </div>

                                        <div className="col form-outline mb-4 mt-4">
                                            <input type="number" id="form2Example1" className="form-control" />
                                            <label className="form-label" for="form2Example1">Service Rate</label>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col form-outline mb-4">

                                            <select className="form-control" name="cars" id="cars">
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            <label for="cars">Select Developer:</label>

                                        </div>


                                        <div className="col form-outline mb-4">
                                            <select className="form-control " name="cars" id="cars">
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                            <label for="cars">Select a customer</label>

                                        </div>


                                    </div>
                                    <div className="col form-outline mb-4 ">
                                        <label htmlFor="job">Job Description</label>
                                        <textarea
                                            type="job"
                                            name="job"
                                            id="job"
                                            cols="80"
                                            rows="10"
                                            autoComplete='off'
                                            placeholder='Enter your work description'>

                                        </textarea>





                                    </div>

                                    <button type="submit" className="btn btn-primary btn-md mb-4">Create Invoice</button>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </div>
    )
}

export default Service