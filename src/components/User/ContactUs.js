import axios from 'axios';
import React from 'react';
import { faEnvelope, faFax, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer';

class ContactUs extends React.Component {
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
            <div id="contact">
                <h3>Contact Us</h3>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th><FontAwesomeIcon icon={faEnvelope} /><br/>Email</th>
                                <th><FontAwesomeIcon icon={faFax} /><br/>Fax</th>
                                <th><FontAwesomeIcon icon={faMobile}/><br/>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(contact =>
                                    <tr>
                                        <td>{contact.email}</td>
                                        <td>{contact.fax}</td>
                                        <td>{contact.mobile}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <div id="btn">
                    <Link to="/"><button className="btn btn-primary">Back</button></Link> <br></br>
                </div>
            </div>
            <Footer/>
            </div>
        );
    }
}
export default ContactUs;