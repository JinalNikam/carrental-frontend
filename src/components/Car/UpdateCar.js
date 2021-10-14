import React from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

class UpdateCar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardetails: undefined,
            carId: '',
            brand: '',
            color: '',
            price: '',
            carType: '',
            createdBy: '',
            modifiedBy: '',
            isUpdated: undefined
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/cardetails/searchById/' + this.props.match.params.id)
            .then(resp => this.setState({
                cardetails: resp.data

            })).then(c => this.setState({

                carId: this.state.cardetails.carId,
                brand: this.state.cardetails.brand,
                color: this.state.cardetails.color,
                price: this.state.cardetails.price,
                carType: this.state.cardetails.carType,
                createdBy: this.state.cardetails.createdBy,
                modifiedBy: this.state.cardetails.modifiedBy

            }));
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
            carId: this.state.carId,
            brand: this.state.brand,
            color: this.state.color,
            price: this.state.price,
            carType: this.state.carType,
            createdBy: this.state.createdBy,
            modifiedBy: this.state.modifiedBy
        }

        axios.put("http://localhost:8080/cardetails/update", cardetails)
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    alert("Car updated successfully");
                    this.setState({
                        isUpdated: true
                    })

                }

            }).catch(error => {
                console.log(error.resp);
                if (error.response.status === 500) {
                    alert("Field is Missing");
                    this.setState({
                        isUpdated: false
                    })
                }

            });

        event.preventDefault();
    }

    render() {

        if (this.state.isUpdated) {
            return <Redirect to={"/"} />
        }

        return (

            <div>
                <NavBar/>
                <div class="car">
                    {
                        this.state.cardetails !== undefined ?

                            <div className="container-fluid">
                                <h2>Update Car</h2>

                                <div class="form-group">
                                    <label>Car Brand</label><br></br>
                                    <p><select value={this.state.brand} onChange={this.handleBrandChange} >
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
                                    <label>Car Color</label><br></br>
                                    <select value={this.state.color} onChange={this.handleColorChange} >
                                        <option value="White">White</option>
                                        <option value="Black">Black</option>
                                        <option value="Gray">Gray</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Red">Red</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Car Type</label><br></br>
                                    <select value={this.state.carType} onChange={this.handleTypeChange} >
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Truck">Truck</option>
                                        <option value="Van">Van</option>
                                        <option value="Mini">Mini</option>
                                    </select>
                                </div>

                                <form class="was-validated">
                                    <div class="form-group">
                                        <label for="price">Car Price/day</label>
                                        <input type="number" class="form-control" id="price" name="CarPrice" name="price" value={this.state.price} onChange={this.handleChange} required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                </form>

                                <div>
                                    <button onClick={this.handleSubmit} className="btn btn-primary">Update</button>
                                </div>
                            </div>
                            : <div><h3>404 Error. Car Not Found</h3></div>
                    }
                    <div>
                        <Link to="/AllCars"><button className="btn btn-primary" >Back</button></Link> <br></br>
                    </div>
                </div>

                <Footer />
            </div >
        )
    }

}

export default UpdateCar;