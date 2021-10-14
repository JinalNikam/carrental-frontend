import React from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer';

class UpdateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            userId: '',
            userName: '',
            password: '',
            address: '',
            emailId: '',
            mobileNo: '',
            isSubscriber: false,
            role: '',
            isUpdated: false

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user/getuserdetails/' + this.props.match.params.id)
            .then(resp => this.setState({
                user: resp.data

            })).then(p => this.setState({

                userId: this.state.user.userId,
                userName: this.state.user.userName,
                password: this.state.user.password,
                address: this.state.user.address,
                emailId: this.state.user.emailId,
                mobileNo: this.state.user.mobileNo,
                isSubscriber: this.state.user.isSubscriber,
                role: this.state.user.role


            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOptionChange = (event) => {
        this.setState({
            isSubscriber: !this.state.isSubscriber
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
        axios.put("http://localhost:8080/user/update", user).then(this.setState({
            isUpdated: true
        }));
        alert("user updated");

        event.preventDefault();
    }

    render() {
        
        if (this.state.isUpdated) {
            return <Redirect to={"/logout"} />
        }

        return (
           <div> 
               <NavBar/>
            <div className="container-fluid">
                <h2>update user</h2>
                {/* <div class="form-group"> */}

                    {/* <label for="userId">user Id</label>
                    <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} class="form-control" id="userId" disabled />
                </div> */}
                <div class="form-group">
                    <label for="userName">user Name</label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} class="form-control" id="userName" />
                </div>

                {/* <div class="form-group">
                    <label for="password">password</label>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="password" />
                </div> */}
                <div class="form-group">
                    <label for="address">address</label>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange} class="form-control" id="address" />
                </div>
                <div class="form-group">
                    <label for="emailId">email</label>
                    <input type="text" name="emailId" value={this.state.emailId} onChange={this.handleChange} class="form-control" id="emailId" />
                </div>
                <div class="form-group">
                    <label for="mobileNo">mobile</label>
                    <input type="text" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} class="form-control" id="mobileNo" />
                </div>

                {/* <div class="form-check-inline">
                    <label class="form-check-label">IsSubscriber:
                        <input type="radio" class="form-check-input" name="isSubscriber" value="true" />True
                        <input type="radio" class="form-check-input" name="isSubscriber" value="false" />False
                    </label>
                </div> */}
                <br />

                <div>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Update</button>
                </div>
                <div id="btn">
                    <Link to="/profile"><button className="btn btn-primary">Back</button></Link> <br></br>
                </div>

            </div>
            <Footer/>
            </div>
        )
    }

}

export default UpdateUser;