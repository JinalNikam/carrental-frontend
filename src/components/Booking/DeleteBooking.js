import React from 'react';
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';

class DeleteBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booking: undefined,
            isUpdated:false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/bookdetails/searchBookById/'+this.props.match.params.id)
            .then(resp => this.setState({
                user: resp.data
            }));
    }
    handleSubmit = (event) => {

        axios.delete("http://localhost:8080/bookdetails/deletebook/" + this.state.booking.bookingId).then(this.setState({
            isUpdated:true
        }));
alert("Booking deleted successfully")
        event.preventDefault();

    }
    render() {
        return(
            <div>
                <NavBar/>
                <h2>Booking Details</h2>
                {
                    this.state.booking !== undefined ?
                    <div> 
                        <p>bookingId: {this.state.booking.bookingId}</p>
                        <p>number of days: {this.state.booking.noOfDays}</p>
                        <p>total amount: {this.state.booking.totalAmount}</p>
                        <p>created timestamp: {this.state.booking.createdTimestamp}</p>
                        <p>updated timestamp: {this.state.booking.updatedTimestamp}</p>
                        <p>booking timestamp: {this.state.booking.bookingTimestamp}</p>
                        <p>booking status: {this.state.booking.bookingStatus}</p>
                        <button onClick={this.handleSubmit} className='btn btn-primary'>Delete</button>
                    </div>
                    :<div>Booking not exists</div>
                                 }
                                 
            <Footer/>
            </div>
        );
    }

}

export default DeleteBooking;