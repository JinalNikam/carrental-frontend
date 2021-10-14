import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contactus.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

class FetchAllContacts extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/contactdetails/getalldetails')
            .then(resp => this.setState({
                contacts: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Contact Management</h2>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Fax</th>
                                <th>Mobile</th>
                                <th>Actions</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(contact =>
                                    <tr>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.fax}</td>
                                        <td>{contact.mobile}</td>
                                        <td><Link to={"/update/" + contact.id}>Update</Link><br />
                                            <Link to={"/delete/" + contact.id}>Delete</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div id="btn">
                    <Link to="/save"><button className="btn btn-primary">Add New Contact</button></Link> <br></br>
                </div>
                <div>
                    <Link to="/admindashboard"><button className="btn btn-primary" >Back</button></Link> <br></br>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FetchAllContacts;