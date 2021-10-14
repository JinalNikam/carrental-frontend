import axios from "axios";
import React from "react";
import { Link,Redirect } from 'react-router-dom'
import Footer from "../Footer";
import NavBar from "../NavBar";

class RespondToGuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestQuery: undefined,
            queryId: '',
            query: '',
            feedback: '',
            
            isUpdated: false
        }

    }


    componentDidMount() {
        axios.get('http://localhost:8080/guestfeedback/getguestquery/' + this.props.match.params.id)
            .then(resp => {
                this.setState({
                   guestQuery: resp.data
                })
            }).then(p => this.setState({
                queryId: this.state.guestQuery.queryId,
                query: this.state.guestQuery.query,
                feedback: this.state.guestQuery.feedback
            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let guestQuery = {
            "queryId": this.state.queryId,
            "query": this.state.query,
            "feedback": this.state.feedback,
           
        }
        axios.put("http://localhost:8080/guestfeedback/updatefeedback" , guestQuery)
            .then(this.setState({
                isUpdated: true
            }));

        alert("Response sent")
        event.preventDefault();
    }


    render() {

        if (this.state.isUpdated) {
            return <Redirect to={"/getAllQueries"} />
        }

        return (


            <div>
                <NavBar/>
                <div className="container-fluid">
    
                  
    
    
                    <h2>Send Feedback</h2>
    
                    {/* <div class="form-group">
                        <label for="name">Query Id</label>
                        <input type="text" name="queryId" value={this.state.queryId} onChange={this.handleChange} class="form-control" id="queryId" />
                    </div> */}
                    <div class="form-group">
                        <label for="email">Query</label>
                        <input type="text" name="query" value={this.state.query} onChange={this.handleChange} class="form-control" id="query" />
                    </div>
                    <div class="form-group">
                        <label for="mobile">Feedback</label>
                        <input type="text" name="feedback" value={this.state.feedback} onChange={this.handleChange} class="form-control" id="feedback" />
                    </div>
    
                    <div>
                        <button onClick={this.handleSubmit} className="btn btn-primary">Send Feedback</button>
                    </div>
    <br></br><br></br>
                    <div>
                <Link to="/getAllQueries"><button className="btn btn-primary">Back</button></Link>
            </div>
                </div>
                <Footer/>
            </div>
    
    
        )
    
    }
}

export default RespondToGuest;