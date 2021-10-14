import React from 'react';
import { Link,Redirect } from 'react-router-dom';

class SearchHome extends React.Component {

    constructor() {
        super();
        this.state = {
            search: '',
            isBrand: false,
            isColor: false,
            isType: false,
            isPrice: false
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        if (this.state.search === "brand") {
            this.setState({isBrand:true})
        }
        else if (this.state.search === "color") {
            this.setState({isColor:true})
        }
        else if (this.state.search === "carType") {
            this.setState({isType:true})
        }
        else {
            this.setState({isPrice:true})
        }

        event.preventDefault();
    }

    render() {
        if (this.state.isBrand) {
            return <Redirect to="/fetchByBrand"/>
        }
        else if (this.state.isColor) {
            return <Redirect to="/fetchByColor"/>
        }
        else if (this.state.isType) {
            return <Redirect to="/fetchByType"/>
        }
        else if (this.state.isPrice) {
            return <Redirect to="/fetchByPrice"/>
        }
        return (
            <div style={{ "margin-left": "35%" }}>

                <label for="search" style={{ "padding-right": "1%", "fontFamily": "Times New Roman, Times, serif", "padding-top": "2%" }}>Search By:</label>
                {/* <input style={{"width":"300px"}} type="text" name="search" value={this.state.search} onChange={this.handleChange} placeholder="Search criteria"/> */}
                <select value={this.state.search} onChange={this.handleChange}>
                    <option selected>-Select-</option>
                    <option value="brand" >Brand</option>
                    <option value="color">Color</option>
                    <option value="carType">Type</option>
                    <option value="price">Budget</option>
                </select>

                {/* <div> */}
                <button style={{ "margin-left": "1%", "margin-top": "-0.5%" }} onClick={this.handleSubmit} class="btn btn-primary">Go</button>
                {/* </div> */}

                {/* if (value == brand) {
                    fetch by brand
                }
                else if (value == color) {
                    fetch by color
                } */}

                {/* <br />
                <div class="form-check-inline" id="radio-button">
                    <label class="form-check-label">
                        Choose criteria to search:
                        <input type="radio" class="form-check-input" name="brand" value='brand' onChange={this.handleChange} />
                         1. <Link to="/fetchByBrand" >Brand</Link>
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" />Color
                        2. <Link to="/fetchByColor" >Color</Link>
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" />Car Type
                        3. <Link to="/fetchByType" >Car Type</Link>
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" />Budget
                        4. <Link to="/fetchByPrice" >Budget</Link>
                    </label>
                </div>
                <br /> */}

                {/* <div class="search" className="container-fluid">
                    <input type="text" class="form-control" placeholder="Search Cars Here..." />
                    <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} class="form-control" placeholder="Search Cars Here..." />
                    <div>
                        <button onClick={this.handleSubmit} class="btn btn-primary">Go</button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default SearchHome;