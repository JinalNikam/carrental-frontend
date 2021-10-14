import React from "react";
import axios from "axios";
import { Link,Redirect } from 'react-router-dom';
import Footer from "../Footer";
import NavBar from "../NavBar";

class DeleteCar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardetails: undefined,
            isUpdate: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/cardetails/searchById/" + this.props.match.params.id)
            .then(resp => this.setState({
                cardetails: resp.data
            }));
    }

    handleSubmit = (event) => {
        axios.delete('http://localhost:8080/cardetails/delete/' + this.state.cardetails.carId).then(this.setState({
            isUpdate: true
        }));
        alert("Car details deleted successfully.");

        event.preventDefault();
    }

    render() {

        if (this.state.isUpdate) {
            return <Redirect to={"/"} />
        }

        return (
            <div>
                <NavBar/>
                <h1>
                    {
                        this.state.cardetails !== undefined ?
                            <div class="car">
                                <h2>Car Details</h2>
                                <br />
                                <h6>
                                    <p>Car Color: {this.state.cardetails.color}</p>
                                    <p>Car Price/day: {this.state.cardetails.price}</p>
                                    <p>CarType: {this.state.cardetails.carType}</p>
                                </h6>

                                <br />
                                <h6> <button onClick={this.handleSubmit} className="btn btn-primary">Confirm Delete</button> </h6>
                            </div>
                            : <div>Car does not exist.</div>
                    }
                </h1>
                <br/><br/>
                <div>
                    <Link to="/AllCars"><button className="btn btn-primary" >Back</button></Link> <br></br>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DeleteCar;
