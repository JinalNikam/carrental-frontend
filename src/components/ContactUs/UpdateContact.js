import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class UpdateContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: undefined,
            id: '',
            name: '',
            email: '',
            fax: '',
            mobile: '',
            createdBy: '',
            modifiedBy: '',
            isUpdated: undefined
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contactdetails/searchbyid/' + this.props.match.params.id)
            .then(resp => this.setState({
                contact: resp.data

            })).then(p => this.setState({
                id: this.state.contact.id,
                name: this.state.contact.name,
                email: this.state.contact.email,
                fax: this.state.contact.fax,
                mobile: this.state.contact.mobile,
            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let contact = {
            "id": this.state.id,
            "name": this.state.name,
            "email": this.state.email,
            "fax": this.state.fax,
            "mobile": this.state.mobile,
        }
        axios.put("http://localhost:8080/contactdetails/updatedetails/admin", contact)
            .then(resp => {
                console.log(resp);
                if (resp.status === 201) {
                    alert("Car updated successfully");
                    this.setState({
                        isUpdated: true
                    })

                }

            }).catch(error => {
                console.log(error.resp);
                if (error.response.status === 500) {
                    alert("Enter valid data");
                    this.setState({
                        isUpdated: false
                    })
                }


            });


        event.preventDefault();
    }

    render() {

        if (this.state.isUpdated) {
            return <Redirect to={"/FetchAllContacts"} />
        }

        return (
            <div>
                <NavBar/>
                <div id="contacts" className="container-fluid">
                    <h3>Update Contact Details</h3>
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
                            <input type="number" name="fax" value={this.state.fax} onChange={this.handleChange} class="form-control" id="Fax" placeholder="Enter Fax number" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter 10 digit fax number</div>
                        </div>
                        <div class="form-group">
                            <label for="Mobile">Mobile</label>
                            <input type="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} class="form-control" id="Mobile" placeholder="Enter Mobile number" aria-describedby="name" required />
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Enter 10 digit Mobile number</div>
                            <div id="btn">
                                <button onClick={this.handleSubmit} className="btn btn-primary">Update</button>
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

export default UpdateContact;