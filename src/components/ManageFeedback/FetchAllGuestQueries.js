import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGuestQueries } from "../../store/actions/GuestActions";
import NavBar from "../NavBar";

function FetchAllGuestQueries() {

    const guestqueries = useSelector(state => state.guestUserReducer.guestqueries);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchGuestQueries());
    }, [])


    return (
        <div>
            
            <h1><center>Guest Query Details</center></h1>

            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {/* <th>Query Id</th> */}
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>Query</th>
                            <th>Response</th>


                            {/* <th>View</th> */}
                            <th>Respond</th>
                            {/* <th>Update User</th>
                                <th>Delete User</th> */}

                        </tr>
                    </thead>
                    <tbody>{
                        guestqueries.length > 0 ?
                            guestqueries.map(guest =>

                                <tr>
                                    {/* <td>{guest.queryId}</td> */}
                                    <td>{guest.name}</td>
                                    <td>{guest.email}</td>
                                    <td>{guest.mobile}</td>
                                    <td>{guest.query}</td>
                                    <td>{guest.feedback}</td>
                                    {
                                        guest.feedback !== null ?
                                            <td>Already Responded</td>
                                            : <td><Link to={"respondToGuest/" + guest.queryId}>Respond</Link></td>
                                    }

                                    {/* <td><Link to={"/fetchGuestQuery/" +  guest.queryId}>View</Link></td> */}
                                    {/* <td><Link to={"/respondToGuest/" + guest.queryId}>Respond</Link></td> */}
                                    {/* <td><Link to="">Delete</Link></td> */}

                                </tr>



                            )

                            : <div>Loading...</div>
                    }
                    </tbody>



                </table>
            </div>

            {/* <div>
                    <Link to="/save"><button className="btn btn-primary">Add New User</button></Link>
                </div> */}



        </div>

    );

}



export default FetchAllGuestQueries;