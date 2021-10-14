import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
import NavBar from "../NavBar";
import Footer from "../Footer";


class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            address: '',
            emailId: '',
            mobileNo: '',
            isSubscriber: false,
            role: '',
            isValidUser: false,
            isRegistered: false
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let user = {
            "userId": this.state.userId,
            "userName": this.state.userName,
            "password": this.state.password,
            "address": this.state.address,
            "emailId": this.state.emailId,
            "mobileNo": this.state.mobileNo,
            "isSubscriber": this.state.isSubscriber,
            "role": this.state.role
        }

        axios.post("http://localhost:8080/user/register", user).then(resp => {
            console.log(resp);

            if (resp.status === 201) {
                let user = {
                    "id": resp.data.id,
                    "userName": resp.data.userName,
                    "password": resp.data.password,

                    "Address": resp.data.address,
                    "mobile": resp.data.mobileNo,
                    "Email": resp.data.emailId,
                }
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    isValidUser: true
                })
                alert("Registered Successfully")
                this.props.history.push('/login');
                window.location.reload();
            }

        }).catch(error => {
            console.log(error.response);

            if (error.response.status === 400) {
                this.setState({
                    isValidUser: false
                })
            }
            if (error.response.status === 404) {
                this.setState({
                    isRegistered: true
                })
            }

        });


        event.preventDefault();

    }

    render() {
        if (this.state.isRegistered === true) {
            alert("Already registered with email address.Please login to continue")
            return <Redirect to={'/login'} />
        }

        return (
            <div>
                <NavBar />
                <p style={{ color: 'red', margin: '1%' }}>All (*) fields are mandatory</p>
                <form onSubmit={this.handleSubmit} class="col-sm-4" action="container-fluid">{
                    this.state.isValidUser === false && <div style={{ color: 'red' }}>
                        <p>Mobile number should be valid 10 digits number</p>
                        <p>password must start with capital letter and should be between 8 and 25 digits length</p></div>}

                    <h1 style={{ color: "blue", textAlign: 'center' }} >Register</h1>
                    <p><p id="redalert">*</p>Username: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} class="form-control" placeholder="Enter username" required /></p>
                    <p><p id="redalert">*</p>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" placeholder="Enter password" required /></p>
                    <p><p id="redalert">*</p>Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange} class="form-control" placeholder="Enter address" /></p>
                    <p><p id="redalert">*</p>MobileNo: <input type="text" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} class="form-control" placeholder="Enter mobile no." required /></p>
                    <p><p id="redalert">*</p>EmailId: <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange} class="form-control" placeholder="Enter emailId" required /></p>
                    <div class="form-check-inline">
                        <label class="form-check-label">Do you want to subscribe for promotional offers?<br/>
                            <input style={{ 'margin-right': '10px' }} type="radio" class="form-check-input" name="isSubscriber" value='true' onChange={this.handleChange} />Yes
                            <input style={{ 'margin-right': '10px' }} type="radio" class="form-check-input" name="isSubscriber" value='false' onChange={this.handleChange} />No
                        </label>
                    </div>
                    <br /><br />
                    <div class="form-check-inline">
                        <label class="form-check-label" required><p id="redalert">*</p>Role:&nbsp;
                            <input type="radio" class="form-check-input" name="role" value='Admin' onChange={this.handleChange} />Admin
                            <input type="radio" class="form-check-input" name="role" value="User" onChange={this.handleChange} />User
                        </label>
                    </div>
                    <br /><br />
                    <p>
                        <button onclick={this.handleSubmit} className="btn btn-primary">Register</button>
                    </p>
                    <Link to={"/login"}>Already Registered? Login</Link>
                </form>
                <Footer />
            </div>
        )
    }
}
export default Registration;