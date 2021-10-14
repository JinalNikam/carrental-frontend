import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';


class FetchUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined

        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/getuserdetails/' + this.props.match.params.id)
            .then(resp => this.setState({
                user: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h2>User</h2>
                {
                    this.state.user !== undefined ?
                        <div>

                            <h3>Booking Details:</h3>
                            {this.state.user.bookings !== undefined && this.state.user.bookings.map(booking =>
                                <div>
                                    <p>BookingId: {booking.bookingId}</p>
                                    <p>Number of days: {booking.noOfDays}</p>
                                    <p>Total amount: {booking.totalAmount}</p>
                                    <p>Bookingstatus: {booking.bookingStatus}</p><hr />
                                </div>
                            )
                            }
                            <h3>Feedback Details:</h3>
                            {this.state.user.registeredFeedback !== undefined && this.state.user.registeredFeedback.map(feedback =>
                                <div> <p>queryId: {feedback.queryId}</p>
                                    <p>query: {feedback.query}</p>
                                    <p>feedback: {feedback.feedback}</p>)</div>)
                            }

                        </div>
                        : <div>user booking and feedback not exists</div>
                }

<Footer/>
            </div>
        );
    }

}

export default FetchUser;