import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

function FetchBooking(props) {
    const [bookListById, setBookListById] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/bookdetails/searchBookById/' + props.match.params.id)
            .then(resp => setBookListById(resp.data));
    }, []);
    return (
        <div>
            <NavBar/>
            <h1>user booking info</h1>
           
                {
                    bookListById !== undefined ?
                            <div>
                            <p>bookingId: {bookListById.bookingId}</p>
                            <p>number of days: {bookListById.noOfDays}</p>
                            <p>total amount: {bookListById.totalAmount}</p>
                             {/* <p>createdTimestamp: {bookListById.createdTimestamp}</p>
                            <p>updatedTimestamp: {bookListById.updatedTimestamp}</p>
                            <p>bookingTimestamp: {bookListById.bookingTimestamp}</p> */}
                            <p>bookingStatus: {bookListById.bookingStatus}</p>
                             {/* <p>user: {bookListById.user}</p>
                            <p>car: {bookListById.car}</p>  */}
                           { bookListById.payment!==undefined && 
                           <div>
                            <p>payment: {bookListById.payment.paymentId}</p>  
                            </div>
}
                            <td><Link to={"/updatebooking/"+bookListById.bookingId}>Update booking</Link></td><br/>
                            <td><Link to={"/deletebooking/"+bookListById.bookingId}>Delete booking</Link></td>
                             </div>
                    
                    : <div>booking Not existing</div>
                }

            <Footer/>
        </div>
    );
}
export default FetchBooking;