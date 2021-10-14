import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Contactus.css';
import NavBar from '../NavBar';
import Footer from "../Footer";

class DeleteContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: undefined,
            isUpdate: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contactdetails/searchbyid/' + this.props.match.params.id)
            .then(resp => this.setState({
                contact: resp.data
            }));
    }

    handleSubmit = (event) => {
        axios.delete("http://localhost:8080/contactdetails/deletedetails/admin/" + this.state.contact.id).then(this.setState({
            isUpdate: true
        }));
        alert("Contact details deleted successfully.");

        event.preventDefault();
    }

    render() {

        if (this.state.isUpdate) {
            return <Redirect to={"/FetchAllContacts"} />
        }

        return (
            <div>
                <NavBar/>
                <div>
                    {
                        this.state.contact !== undefined ?
                            <div id="delete">
                                <h3>Contact Details</h3>
                                <br />
                                <p>Contact Name: {this.state.contact.name}</p>
                                <p>Contact Email: {this.state.contact.email}</p>
                                <p>Contact Fax: {this.state.contact.fax}</p>
                                <p>Contact Mobile: {this.state.contact.mobile}</p>

                                <br />
                            </div>
                            : <div>Contact does not exist.</div>
                    }
                    <div id="btn">
                        <button onClick={this.handleSubmit} className="btn btn-primary">Confirm Delete</button></div><br />
                    <Link to="/FetchAllContacts"><button className="btn btn-primary">Back</button></Link> <br></br>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DeleteContact;