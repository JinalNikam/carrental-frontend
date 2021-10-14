import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from "../Footer";
import car1 from '../../assets/car3.jpg';
import car2 from '../../assets/car4.jpg';
import car3 from '../../assets/car2.jpg';
import car4 from '../../assets/car1.png';
import car5 from '../../assets/car9.jpg';
import car6 from '../../assets/car6.jpg';

class SearchCarsByPrice extends React.Component {

    constructor() {
        super();
        this.state = {
            price: '',
            cars: [],
            carImages: [car1, car2, car3, car4, car5, car6]
        }
    }

    handleChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit = (event) => {
        axios.get('http://localhost:8080/cardetails/searchByPrice/' + this.state.price).then(resp => this.setState({
            cars: resp.data
        }));

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <NavBar />
                <div style={{ "margin-left": "3%" }}>
                    <h2 style={{ "color": "green" }}>Search Cars</h2>
                    <br />
                    <div class="form-group">
                        <label for="price">Choose your Budget:</label>
                        <select value={this.state.price} onChange={this.handleChange} >
                            <option selected>-Select-</option>
                            <option value="3000000" >3000000</option>
                            <option value="4000000">4000000</option>
                            <option value="5000000">5000000</option>
                            <option value="6000000">6000000</option>
                            <option value="7000000">7000000</option>
                            <option value="8000000">8000000</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit} className="btn btn-primary">Search</button>
                    </div>
                    <br />
                    <div>
                        {
                            this.state.cars.length > 0 ?
                                <div class="card-columns search" style={{ "height": "375px" }}>
                                    {
                                        this.state.cars.map((car, index) =>
                                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div class="card" style={{ "height": "360px" }} >
                                                    <img class="card-img-top" src={this.state.carImages[index]} alt="Car image" style={{ width: "80%" }} />
                                                    <br />
                                                    <h4 className="card-title">Brand: {car.brand}</h4>
                                                    <p className="card-text">Price/Day: Rs. {car.price}/-</p>
                                                    <p><Link to={"/fetchcar/" + car.carId} className="btn btn-primary">View</Link>     <button className="btn btn-primary">Book Now</button></p>
                                                    <br />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                : <div></div>
                        }
                        <br />
                        <br />
                        <div>
                            <Link to="/"><button className="btn btn-primary" >Back</button></Link> <br></br>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SearchCarsByPrice;