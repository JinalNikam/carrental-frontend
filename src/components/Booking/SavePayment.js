import React from 'react';
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';

class SavePayment extends React.Component {
    constructor() {
        super();
        this.state = {

            modeOfPayment: '',
            bookingId: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {

        let payload = {

            "modeOfPayment": this.state.modeOfPayment,
            "bookingId": this.state.bookingId
        }

        axios.post("http://localhost:8080/paymentdetails/savepayment"+payload).then(resp => console.log(resp.data));
        alert("Payment Saved");

        event.preventDefault();
    }


    render() {
        return (
            <div>
                <NavBar/>
            
            <div className="container-fluid">
                <h2 class="text-success , text-center , text-bold">Make a Payment </h2>

                <div class="form-group">
                    <label for="modeOfPayment" >Mode of payment </label>
                    <input type="text" name="modeOfPayment" value={this.state.modeOfPayment} onChange={this.handleChange} class="form-control" placeholder="Enter mode of payment" id="mode of payment" />

                </div>
                <div class="form-group">
                    <label for="bookingId" >Booking ID </label>
                    <input type="text" name="bookingId" value={this.state.bookingId} onChange={this.handleChange} class="form-control" id="bookingId" />

                </div>
                {/* <div class="form-group">
                    <label for ="updatedTimestamp" >Updated Timestamp </label>
                    <input type ="text" name ="updatedTimestamp" value ={this.state.updatedTimestamp} onChange={this.handleChange} class = "form-control"  id="updatedTimestapm"/>

                </div> */}
                <button type="button" class="btn btn-info" onClick={this.handleSubmit}>Pay</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SavePayment;