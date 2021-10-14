import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class ChangePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            userId: '',
            password: '',
            confirmPassword: '',
            isUpdated: false

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user/getuserdetails/' + this.props.match.params.id)
            .then(resp => this.setState({
                user: resp.data

            }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    handleSubmit = (event) => {

        let user = {
            "userId": this.state.user.userId,
            "userName": this.state.user.userName,
            "password": this.state.password,
            "address": this.state.user.address,
            "emailId": this.state.user.emailId,
            "mobileNo": this.state.user.mobileNo,
            "isSubscriber": this.state.user.isSubscriber,
            "role": this.state.user.role

        }
        if (this.state.password !== this.state.confirmPassword) {
            alert("password doesnt match");
        }

        else {
            axios.put("http://localhost:8080/user/update", user).then(this.setState({
                isUpdated: true
            }));
            event.preventDefault();
        }
    }

    render() {

        if (this.state.isUpdated === true) {
            return <Redirect to={"/profile/" + this.state.user.userId} />
        }

        return (
            <div>
                <NavBar/>
                <div class='col-sm-4' >
                    <h2>Change Password</h2>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Enter new password" id="password" />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={this.handleChange} class="form-control" placeholder="Reenter new password" />
                    </div>


                    <div>
                        <button onClick={this.handleSubmit} className="btn btn-primary">Change Password</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}

export default ChangePassword;