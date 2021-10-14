import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from "../Footer";
import car1 from '../../assets/car8.jpg';
import car2 from '../../assets/car7.jpg';
import car3 from '../../assets/car6.jpg';
import car4 from '../../assets/car1.png';
import car5 from '../../assets/car4.jpg';
import car6 from '../../assets/car5.jpg';

class SearchCarsByType extends React.Component {

    constructor() {
        super();
        this.state = {
            carType: '',
            cars: [],
            carImages: [car1, car2, car3, car4, car5, car6]
        }
    }

    handleChange = (event) => {
        this.setState({
            carType: event.target.value
        });
    }

    handleSubmit = (event) => {
        axios.get('http://localhost:8080/cardetails/searchByType/' + this.state.carType).then(resp => this.setState({
            cars: resp.data
        }));

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <NavBar />
                <div style={{ "padding-left": "5%" }}>
                    <h2 style={{ "color": "green" }}>Search Cars</h2>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group" style={{ "width": "20%" }}>
                            <label for="brand">Search by Type:</label>
                            <select value={this.state.price} onChange={this.handleChange} >
                                <option selected>-Select-</option>
                                <option value="sedan" >Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="hatchback">Hatchback</option>
                            </select>
                        </div>
                        <div>
                            <button onclick={this.handleSubmit} className="btn btn-primary">Search</button>
                        </div>
                        <br />
                    </form>

                    <div>
                        {
                            this.state.cars.length > 0 ?
                                <div class="card-columns search" style={{ "height": "375px" }}>
                                    {
                                        this.state.cars.map((car, index) =>
                                            <div class="card" style={{ "height": "360px" }} >
                                                <img class="card-img-top" src={this.state.carImages[index]} alt="Car image" style={{ width: "80%" }} />
                                                <br />
                                                <h4 className="card-title">Brand: {car.brand}</h4>
                                                <p className="card-text">Price/Day: Rs. {car.price}/-</p>
                                                <p><Link to={"/fetchcar/" + car.carId} className="btn btn-primary">View  </Link>    <button onClick={this.handleSubmit} className="btn btn-primary">  Book Now</button></p>
                                                <br />
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

export default SearchCarsByType;