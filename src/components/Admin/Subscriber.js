import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class Subscriber extends React.Component {
    constructor() {
        super();
        this.state = {
            subscribers: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/getAllSubscribers')
            .then(resp => this.setState({
                subscribers: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div id="dashboard">
                    <h2>Subscriber Details</h2>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.subscribers.map(subscriber =>
                                        <tr>
                                            <td>{subscriber.userName}</td>
                                            <td>{subscriber.emailId}</td>
                                            <td>{subscriber.mobileNo}</td>
                                            <td>{subscriber.address}</td>                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to="/"><button className="btn btn-primary">Back</button></Link> <br></br>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Subscriber;