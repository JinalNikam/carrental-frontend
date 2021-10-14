import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';


class SaveContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            fax: '',
            mobile: '',
            dateOfCreation: '',
            dateOfModification: '',
            createdBy: '',
            modifiedBy: '',
            isAdded: undefined
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {

        let contacts = {
            "name": this.state.name,
            "email": this.state.email,
            "fax": this.state.fax,
            "mobile": this.state.mobile,
            "dateOfCreation": this.state.dateOfCreation,
            "dateOfModification": this.state.dateOfModification,
            "createdBy": this.state.createdBy,
            "modifiedBy": this.state.modifiedBy
        }

        axios.post("http://localhost:8080/contactdetails/savedetails/admin", contacts)
        .then(resp => {
            console.log(resp);
            if (resp.status === 201) {
                alert("Contact added successfully");
                this.setState({
                    isAdded: true
                })

            }

        }).catch(error => {
            console.log(error.resp);
            if (error.response.status === 400) {
                alert("Enter valid data");
                this.setState({
                    isAdded: false
                })
            }
            });
        event.preventDefault();
    }
    render() {
        if (this.state.isAdded) {
            return <Redirect to="/FetchAllContacts" />
        }
        return (
            <div>
                <NavBar/>
                <div id="contacts" className="container-fluid">
                    <h2>Add Contact Details</h2>
                    <form class="was-validated">
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} class="form-control" id="adminName" placeholder="Enter admin Name" aria-describedby="name" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter Name</div>
                        </div>
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} class="form-control" id="adminEmail" placeholder="Enter admin Email Id" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter valid Email Id</div>
                        </div>
                        <div class="form-group">
                            <label for="Fax">Fax</label>
                            <input type="number" minLength="10" maxLength="10" name="fax" value={this.state.fax} onChange={this.handleChange} class="form-control" id="Fax" placeholder="Enter Fax number" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter 10 digit fax number</div>
                        </div>
                        <div class="form-group">
                            <label for="Mobile">Mobile</label>
                            <input type="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} class="form-control" id="Mobile" placeholder="Enter Mobile number" aria-describedby="name" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter 10 digit Mobile number</div>
                            <div id="btn">
                                <button onClick={this.handleSubmit} className="btn btn-primary">Add</button>
                            </div>
                            <div id="back">
                                <Link to="/FetchAllContacts"><button className="btn btn-primary" >Back</button></Link> <br></br>
                            </div>

                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SaveContactUs;