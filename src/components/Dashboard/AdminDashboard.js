import axios from 'axios';
import React from 'react';
import './AdminDashboard.css';
import Footer from '../Footer';
import { faQuestionCircle, faUserCheck, faUser, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../NavBar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: undefined
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/dashboarddetails/getAlldashboarddetails')
            .then(resp => this.setState({
                dashboard: resp.data
            }));
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div id="dashboard">
                    <h2>Dashboard</h2>
                    {
                        this.state.dashboard !== undefined ?
                            <div class="container">
                                <div class="row">
                                    <a class="col" href="/AllCars"><p><FontAwesomeIcon icon={faCar} /><br />{this.state.dashboard.noOfAllCars}<br />Total Cars</p></a>
                                    <a class="col" href="/bookedcars"><p><FontAwesomeIcon icon={faCar} /><br />{this.state.dashboard.noOfBookedCars}<br />Booked Cars</p></a>
                                    <a class="col" href="/AllUsers"><p><FontAwesomeIcon icon={faUser} /><br />{this.state.dashboard.noOfRegisteredUsers}<br />Total Users</p></a>
                                </div>
                                <div class="row">
                                    <a class="col" href="/subscribers"><p><FontAwesomeIcon icon={faUserCheck} /><br />{this.state.dashboard.noOfSubscribers}<br />Total Subscribers</p></a>
                                    <a class="col" href="/fetchAllRegQueries"><p><FontAwesomeIcon icon={faQuestionCircle} /><br />{this.state.dashboard.noOfRegisteredUserQuery}<br />Queries by Registered user</p></a>
                                    <a class="col" href="/fetchAllGuestQueries"><p><FontAwesomeIcon icon={faQuestionCircle} /><br />{this.state.dashboard.noOfGuestUserQuery}<br />Queries by Guest user</p></a>
                                </div>
                            </div >
                            : <div>Loading......</div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}
export default Dashboard;