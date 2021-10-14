import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../../store/actions/GuestActions";
import { Redirect } from "react-router";
import './Form.css';
import logoimage from '../../assets/logoimg.png';
import validator from "validator";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";




function GuestQueryForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [query, setQuery] = useState('');
    const [emailError, setEmailError] = useState('')
    const [isError, setIsError] = useState(false);

    const validateEmail = (e) => {
        // var email = e.target.value
        setEmail(e.target.value)


        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }



    const guestquery = useSelector(state => state.guestUserReducer.guestquery)
    const dispatch = useDispatch();

    let handleSubmit = (event) => {
        let payload = {
            name: name,
            email: email,
            mobile: mobile,
            query: query
        }

        console.log(payload);

        dispatch(addQuery(payload));

        console.log("Query  saved" + payload.Name)

        event.preventDefault();
    }

    return (



        <div>
            <NavBar />

            <div className="container query-form">


                {
                    guestquery !== undefined && <Redirect to="/thankyou" />
                }

                <div class="query-image">
                    <img src={logoimage} alt="rocket_contact" />
                </div>

                <form onSubmit={handleSubmit}>






                    <h3>Drop a Query</h3>
                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group">
                                <input type="text" name="userName" onChange={(e) => setName(e.target.value)} class="form-control" placeholder="Your Name *" value={name} />
                            </div>

                            <div class="form-group">
                                <input type="text" name="emailId" value={email} onChange={(e) => validateEmail(e)} class="form-control" placeholder="Your Email *" /><br></br>
                                <span style={{ fontWeight: 'bold', color: 'red' }}>{emailError}</span>
                            </div>

                            <div class="form-group">
                                <TextField type="tel" name="mobile" error={isError} value={mobile} onChange={(e) => {
                                    setMobile(e.target.value);
                                    if (e.target.value.length > 10) {
                                        setIsError(true);
                                    }
                                }} class="form-control" placeholder="Your mobile *" id="mobile"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            +91
                                        </InputAdornment>,
                                    }}

                                />
                            </div>

                            <div>
                                <button onclick={handleSubmit} className="btn btn-primary">Send</button>
                            </div>


                        </div>


                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} class="form-control" placeholder="Your Query *" style={{ width: '100%', height: '150px' }} id="query" required />
                            </div>
                        </div>

                    </div>

                </form>


                <br></br><br></br><center><Link to="/"><button className="btn btn-primary" >Back</button></Link></center> <br></br>


            </div>
            <Footer/>
        </div>
    );
}


export default GuestQueryForm;

