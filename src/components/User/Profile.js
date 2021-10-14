import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import NavBar from '../NavBar';
import Footer from '../Footer';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogout: false
        }
    }
   
    logout = () => {
        localStorage.removeItem("user");
        alert("logout success");
        this.setState({
            isLogout: true
        })
    }
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.isLogout) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <NavBar />
                <h2>User Details</h2>
                {
                    user !== undefined ?
                        <div>
                            <div class="navbar" style={{ display: 'block' }}>

                                <button><Link to={"/updateuser/" + user.userId}>Update Profile</Link> </button>
                                <button><Link to={"/changepassword/" + user.userId}>Change Password</Link> </button>

                            </div>
                            <p>user Name: {user.userName}</p>
                            <p>address: {user.Address}</p>
                            <p>emailId: {user.Email}</p>
                            <p>mobile: {user.mobile}</p>

                        </div>
                        : <div>user Not existing</div>}
                <Footer />
            </div>
        )
    }

}

export default Profile;