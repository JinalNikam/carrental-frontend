import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
            isValidUser: true,
            message: '',
            userList: [],
            isEmailExisting: undefined,
            manageQuery: '',
            role: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user/getall')
            .then(resp => this.setState({
                userList: resp.data

            }));

    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        if (this.state.userList.length > 0) {
            this.state.userList.map(user => {
                if (this.state.emailId !== user.emailId) {
                    console.log(this.state.isEmailExisting);
                    this.setState({ isEmailExisting: true })
                }
                else {
                    let loginPayload =
                    {
                        emailId: this.state.emailId,
                        password: this.state.password
                    }
                    this.setState({ isEmailExisting: false })

                    axios.post("http://localhost:8080/user/login", loginPayload).then(resp => {
                        console.log(resp);

                        if (resp.status === 200) {
                            let user = {
                                "userId": resp.data.userId,
                                "userName": resp.data.userName,
                                "password": resp.data.password,

                                "Address": resp.data.address,
                                "mobile": resp.data.mobileNo,
                                "Email": resp.data.emailId,
                                "manageQuery": resp.data.manageQuery,
                                "role": resp.data.role
                            }
                            localStorage.setItem("user", JSON.stringify(user));
                            this.setState({
                                isValidUser: true
                            })

                            if (user.role === "Admin") {
                                this.props.history.push('/admindashboard');
                                window.location.reload();
                            }
                            else {
                                this.props.history.push('/userdashboard');
                                window.location.reload();
                            }

                        }

                    }).catch(error => {
                        console.log(error.response);

                        if (error.response.status === 404) {
                            this.setState({
                                isValidUser: false

                            })
                        }

                    });
                }
            })
        }


        event.preventDefault();
    }

    render() {

        return (
            <div>
                <NavBar />
                <form onSubmit={this.handleSubmit} style={{ margin: 'auto', padding: '5%' }} className="container-fluid" >
                    {

                        this.state.isValidUser === false && <div style={{ color: 'red' }}><h3>Invalid emailId or password</h3>
                            <p>emailId should be valid eg.xxxxx@tmail.com</p>
                            <p>password length should be between 8 and 25. First letters must be capital followed
                                by it can include [A-Za-z0-9 @#] format</p></div>

                    }
                    {
                        this.state.isEmailExisting === true &&
                        <h3 style={{ color: 'red' }}>You are not registered. Please SignUp!</h3>
                    }
                    < h2 style={{ color: 'blue' }}> Login</h2>
                    <div class="col-sm-4">
                        <label htmlFor="emailId">EmailId</label>
                        <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange} className="form-control" placeholder="Enter emailId" id="emailId" required />

                    </div>
                    <div class="col-sm-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" id="password" required />

                    </div>
                    <br />
                    <div >
                        <button onclick={this.handleSubmit} className="btn btn-primary" width='50%'>Login</button>
                    </div>
                    <Link to={"/register"}>New User? SignUp</Link>
                </form >

                <Footer />
            </div>
        )
    }
}
export default Login;
