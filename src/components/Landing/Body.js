import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Body.css';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import car4 from '../../assets/car6.jpg';
import car5 from '../../assets/car8.jpg';
import car6 from '../../assets/car7.jpg';
import car7 from '../../assets/car4.jpg';
import car8 from '../../assets/car5.jpg';
import car9 from '../../assets/car9.jpg';
import SearchHome from './SearchHome';

class Car extends React.Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            carImages: [car1, car2, car3, car4, car5, car6, car7, car8, car9]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/getAllCarsByUsers')
            .then(resp => this.setState({
                cars: resp.data
            }));
    }

    handleSubmit = (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            <Link to="/savebooking"></Link>
        }
        else {
            alert("You must login to book the car.");
        }
    }

    render() {
        return (

            <div>
                <SearchHome />
                <br />
                <div class="card-columns">
                    {
                        this.state.cars.map((car, index) =>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div class="card" >
                                    <img class="card-img-top" src={this.state.carImages[index]} alt="Car image" style={{ width: "80%" }} />
                                    <h4 className="card-title">Brand: {car.brand}</h4>
                                    <p className="card-text">Price/Day: Rs. {car.price}/-</p>
                                    <p><Link to={"/fetchcar/" + car.carId} className="btn btn-primary">View  </Link>    <button onClick={this.handleSubmit} className="btn btn-primary">  Book Now</button></p>
                                    <br />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div id="btn-center">
                    <button class="btn btn-primary" type="submit"><a href="/"><p>Back To Top &uarr;</p></a></button>
                </div>
                <br/>
                <Link style={{"margin-left":"3%"}} to={"/login"}>Already a User? Login</Link>
            </div>
        );
    }
}

export default Car;