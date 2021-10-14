import axios from 'axios';
import React from 'react';
import{Link} from 'react-router-dom';
import '../Dashboard/AdminDashboard.css';
import Footer from '../Footer';
import NavBar from '../NavBar';

class BookedCars extends React.Component {
    constructor() {
        super();
        this.state = {
            cardetails: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/getAllBookedCars')
            .then(resp => this.setState({
                cardetails: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
            <div id="dashboard">
                <h2>Booked Car Details</h2>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Colour</th>
                                <th>Price/Day</th>
                                <th>Car Type</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cardetails.map(cardetail =>
                                    <tr>
                                        <td>{cardetail.brand}</td>
                                        <td>{cardetail.color}</td>
                                        <td>{cardetail.price}</td>
                                        <td>{cardetail.carType}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Link to="/admindashboard"><button className="btn btn-primary">Back</button></Link> <br></br>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default BookedCars;