import React,{useState,useEffect} from 'react'

function Service() {
    const [developer, setDeveloper] = useState([]);
    const [service, setService] = useState({
        name: '',
        description: '',
        rate: '',
        client_id: '',
        developer_id: '',


    })
    useEffect(() => {
        fetch("http://localhost:9292/developers")
          .then((r) => r.json())
          .then((data) => setDeveloper(data));
      }, []);
    
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(service)
        })
             .then(response => response.json())
            .then(data => console.log(data))

        setService({
            name: '',
            description: '',
            rate: '',
            client_id: '',
            developer_id: '',
    
        })


    }
    const handleChange = (e) => {
        setService({
             ...service,
             [e.target.name]: e.target.value
         })
        }
    return (
        <div>
            <div>
                <section className="inner-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                        <div className="col form-outline mb-4 mt-4">
                                            <input type="text" id="form2Example1" className="form-control" onChange={handleChange}/>
                                            <label className="form-label" >Service name</label>
                                        </div>

                                        <div className="col form-outline mb-4 mt-4">
                                            <input type="number" id="form2Example1" className="form-control" onChange={handleChange}/>
                                            <label className="form-label" >Service Rate</label>
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
                                            placeholder='Enter your work description' onChange={handleChange}>

                                        </textarea>





                                    </div>

                                    <button type="submit" className="btn btn-primary btn-md mb-4" onSubmit={handleSubmit}>Create Job</button>


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