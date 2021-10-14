import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import './Form.css'
import logoimage from '../../assets/logoimg.png'
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";


class RegQueryForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            userId: '',
            query: '',
            feedback: [],
            isUpdated: false

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        let regQuery = {
            "query": this.state.query
        }

        const user = JSON.parse(localStorage.getItem('user'));
        axios.post("http://localhost:8080/registeredfeedback/addquery/" + user.userId, regQuery)
            .then(this.setState({
                isUpdated: true
            }));

        alert("Query sent")
        event.preventDefault();
    }


    sendFeedback = (event) => {

        const user = JSON.parse(localStorage.getItem('user'));
        axios.get("http://localhost:8080/user/getuserdetails/" + user.userId)
            .then(resp => this.setState({

                feedback: resp.data.manageQuery
            }));

        // alert("Query sent")
        event.preventDefault();
    }


    render() {

        // const user = JSON.parse(localStorage.getItem('user'));
        if(this.state.isUpdated===true){
            return <Redirect to="/thankyou"/>
        } 

        

        return (

            <div>
                <NavBar/>
                <div className="container query-form">
                    {/* {
                        this.state.query!==undefined && <Redirect to="/thankyou"/>
                    } */}
                  

                    <div class="query-image">
                        <img src={logoimage} alt="rocket_contact" />
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <h3>Drop a Query</h3>
                        <div class="row">

                         <div class="col-md-6">
                             <div id='formstyle'>

                            <div class="form-group">

                                <input type="text" name="query" value={this.state.query} onChange={this.handleChange} class="form-control" placeholder="Your Query *" style={{ width: '100%', height: '150px' }} id="query" required />
                            </div>

                            <div>
                                <button onclick={this.handleSubmit} className="btn btn-primary">Send</button>
                            </div><br></br><br></br>

                        </div>

                        </div>
                        </div>

                    </form>




                    <div class="col-md-6">
                        <div id='table'>
                       

                    <div class="table-responsive" >
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Query</th>
                                    <th>Response</th>
                                </tr>
                            </thead>
                            <tbody>{
                                this.state.feedback.length > 0 ?
                                    this.state.feedback.map(feed =>
                                        <tr>
                                            <td>{feed.query}</td>
                                            <td>{feed.feedback}</td>
                                        </tr>
                                    )

                                    : <div>Click on View Feedback </div>
                            }
                            </tbody>
                        </table>
                        <button onClick={this.sendFeedback} className="btn btn-primary">View Feedback</button>

                        <div>

                    <br></br><br></br><Link to="/"><button className="btn btn-primary" >Back</button></Link> <br></br>

                </div>
                    </div>
                   
                    </div>
                    </div>



                </div>
                <Footer/>
            </div>
        )
    }
}


export default RegQueryForm;



