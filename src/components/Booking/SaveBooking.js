import React from 'react';
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';

class SaveBooking extends React.Component {

    constructor() {
        super();
        this.state = {

            userId: '',
            carId: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let payment = {

            "userId": this.state.userId,
            "carId": this.state.carId
        }

        axios.post("http://localhost:8080/bookdetails/savebook", payment).then(resp => console.log(resp.data));
        alert("User paid successfully");

        event.preventDefault();
    }


    render() {
        return (
            <div>
                <NavBar/>
            <div className="container-fluid">
                <h2 class="text-success , text-center , text-bold">Make a Book </h2>
                <div class="form-group">
                    <label for="userId" >User ID </label>
                    <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} class="form-control" id="userId" />

                </div>
                <div class="form-group">
                    <label for="carId" > Car ID</label>
                    <input type="text" name="carId" value={this.state.carId} onChange={this.handleChange} class="form-control" id="carId" />

                </div>


                <button type="button" class="btn btn-info" onClick={this.handleSubmit}>Pay</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SaveBooking;