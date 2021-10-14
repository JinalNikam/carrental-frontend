import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logoimg.png';
import Logout from '../components/Logout/Logout';

class NavBar extends React.Component {

    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);

        return (
            <div id="flex-container">
                <div class="container-fluid">
                    <div class="img-fluid">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div>
                        <h1 class="title"><span class="current">Car</span>On<span class="current">Rent</span></h1>
                    </div>

                    <div id="main-nav" >
                        <ul class="nav nav-pills justify-content-end">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/aboutUs">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contactus">Contact Us</Link>
                            </li>

                            {
                                user !== null ?
                                    user.role !== "Admin" ?
                                        <React.Fragment>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/addRegQuery">Drop Query</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/profile">Profile</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Logout />
                                            </li>
                                        </React.Fragment>

                                        : <React.Fragment>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/getAllQueries">Feedback</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/FetchAllContacts">Manage Contacts</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/AllCars">Manage Cars</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Logout />
                                            </li>
                                        </React.Fragment>

                                    : <React.Fragment>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/add">Drop Query</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/login">Login</Link>
                                        </li>

                                    </React.Fragment>
                            }
                        </ul>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default NavBar;