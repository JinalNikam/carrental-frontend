import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from "../Footer";
import car from "../../assets/car3.jpg";
import "./Car.css";

class FetchCar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            car: undefined
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/searchById/' + this.props.match.params.id)
            .then(resp => this.setState({
                car: resp.data
            }));
    }

    handleSubmit = (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            <Link to="/savebooking" />
        }
        else {
            alert("You must login to book the car.");
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                {
                    this.state.car !== undefined ?
                        <div class="fetch-car" >
                            <h2>Car Details:</h2>
                            <br />
                            <div class="row text-left">
                                <div class="col-xl-6">
                                    <img src={car} alt="car" class="img-responsive" />
                                </div>
                                <div class="col-xl-6">
                                    <p>Car Brand: {this.state.car.brand}</p>
                                    <p>Car Color: {this.state.car.color}</p>
                                    <p>Car Type: {this.state.car.carType}</p>
                                    <p>Car Price/Day: Rs. {this.state.car.price}/-</p>
                                    <button onClick={this.handleSubmit} className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                        : <div>Car does not exist.</div>
                }
                <br/>
                <div>
                    <Link to="/"><button className="btn btn-primary" >Back</button></Link> <br></br>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default FetchCar;