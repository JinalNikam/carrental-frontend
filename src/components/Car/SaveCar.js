import React from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
import './Car.css';
import Footer from '../Footer';
import NavBar from '../NavBar';

class SaveCar extends React.Component {
    constructor() {
        super();
        this.state = {
            CarBrand: '',
            CarColor: '',
            CarPrice: '',
            CarType: '',
            CreatedBy: '',
            ModifiedBy: '',
            IsBooked: '',
            isAdded: undefined
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleBrandChange = (event) => {
        this.setState({
            CarBrand: event.target.value
        });
    }
    handleTypeChange = (event) => {
        this.setState({
            CarType: event.target.value
        });
    }
    handleColorChange = (event) => {
        this.setState({
            CarColor: event.target.value
        });
    }


    handleSubmit = (event) => {

        let cardetails = {
            "brand": this.state.CarBrand,
            "color": this.state.CarColor,
            "price": this.state.CarPrice,
            "carType": this.state.CarType,
            "createdBy": this.state.CreatedBy,
            "modifiedBy": this.state.ModifiedBy,
            "isBooked": this.state.IsBooked
        }

        axios.post("http://localhost:8080/cardetails/save", cardetails)
            .then(resp => {
                console.log(resp);
                if (resp.status === 201) {
                    alert("Car added successfully");
                    this.setState({
                        isAdded: true
                    })

                }

            }).catch(error => {
                console.log(error.resp);
                if (error.response.status === 400) {
                    alert("Field is missing");
                    this.setState({
                        isAdded: false
                    })
                }
            });

        event.preventDefault();
    }

    render() {

        if (this.state.isAdded) {
            return <Redirect to={"/"} />
        }

        return (
            <div>
                <NavBar/>
                <form class="car">
                    <div className="container-fluid">
                        <h3>Add Car</h3>
                        <h6> <div class="form-group">
                            <label>Car Brand</label><br></br>
                            <p><select value={this.state.CarBrand} onChange={this.handleBrandChange} >
                                {/* <input type="text" name="CarBrand" value={this.state.CarBrand} onChange={this.handleCarChange} class="form-control" /> */}
                                <option selected>-Select Brand-</option>
                                <option value="Honda" >Honda</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Tata">Tata</option>
                                <option value="Hyundai">Hyundai</option>
                                <option value="Renault">Renault</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                            </select></p>
                        </div>
                            <div class="form-group">
                                <label>Car Type</label><br></br>
                                <select value={this.state.CarType} onChange={this.handleTypeChange} >
                                    {/* <input type="text" name="CarType" value={this.state.CarType} onChange={this.handleTypeChange} class="form-control" /> */}
                                    <option selected>-Select Type-</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                    <option value="Mini">Mini</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Car Color</label><br></br>
                                <select value={this.state.CarColor} onChange={this.handleColorChange} >
                                    {/* <input type="text" name="CarType" value={this.state.CarType} onChange={this.handleTypeChange} class="form-control" /> */}
                                    <option selected>-Select Color-</option>
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Red">Red</option>
                                </select>
                            </div></h6>

                        <form class="was-validated">
                            <div class="form-group">
                                <label for="price">Price/day</label>
                                <input type="number" class="form-control" id="price" placeholder="Enter price" name="CarPrice" value={this.state.CarPrice} onChange={this.handleChange} required />
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                        </form>

                        <br></br>
                        <div class="form-group">
                            <label>Available to rent?</label>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="IsBooked" value="false" onChange={this.handleChange} id="isBooked" />
                                <label class="form-check-label">Yes</label>
                            </div><br></br>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="IsBooked" value="true" onChange={this.handleChange} id="isBooked" />
                                <label class="form-check-label">No</label>
                            </div>
                            <br></br>
                            <div>
                                <button onClick={this.handleSubmit} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <Link to="/AllCars"><button className="btn btn-primary" >Back</button></Link> <br></br>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SaveCar;