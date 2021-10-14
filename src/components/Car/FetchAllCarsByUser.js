import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

class FetchAllCarsByUser extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/getAllCarsByUsers')
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
                                <th>Type</th>
                                <th>Price/Day</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cars.map(car =>
                                    <tr>
                                        <td>{car.brand}</td>
                                        <td>{car.color}</td>
                                        <td>{car.carType}</td>
                                        <td>{car.price}</td>
                                        <td><Link to={"/fetch/"+car.carId}>View</Link></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default FetchAllCarsByUser;