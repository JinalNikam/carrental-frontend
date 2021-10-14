import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class FetchAllCarsByAdmin extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/getAllCarsByAdmin')
            .then(resp => this.setState({
                cars: resp.data
            }));
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Color</th>
                                <th>Price/Day</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cars.map(car =>
                                    <tr>
                                        <td>{car.brand}</td>
                                        <td>{car.color}</td>
                                        <td>{car.price}</td>
                                        <td>{car.carType}</td>
                                        <td><Link to={"/updatecar/" + car.carId}>Update</Link><br/> <Link to={"/deletecar/" + car.carId}>Delete</Link></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <div><h2>
                    <Link to="/savecar"><button className="btn btn-primary">Add New Car</button></Link>
                </h2></div>
                <div>
                    <Link to="/admindashboard"><button className="btn btn-primary" >Back</button></Link> <br></br>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FetchAllCarsByAdmin;