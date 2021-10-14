import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class FetchAllUser extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user/getAllRegisteredUsers')
            .then(resp => this.setState({
                users: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div id="dashboard">
                    <h2>Registered User Details</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email Id</th>
                                    <th>Mobile No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(user =>
                                        <tr>
                                            <td>{user.userName}</td>
                                            <td>{user.address}</td>
                                            <td>{user.emailId}</td>
                                            <td>{user.mobileNo}</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to="/admindashboard"><button className="btn btn-primary">Back</button></Link> <br></br>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default FetchAllUser;