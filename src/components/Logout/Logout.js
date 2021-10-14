import React from 'react';
import { Redirect } from 'react-router-dom';
import './Logout.css';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogout : false
        }
    }

    logout = () => {
        localStorage.removeItem("user");
        alert("Logout Success");
        this.setState({
            isLogout :true
        })
    }

    render() {
        if(this.state.isLogout) {
            return <Redirect to="/"/>
        }
        return (
            <div class="logout"><button onClick={this.logout}>Logout</button></div>
        )
    }

}

export default Logout;