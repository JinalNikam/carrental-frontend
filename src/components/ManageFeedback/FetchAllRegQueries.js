import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchRegUserQueries} from '../../store/actions/RegUserActions'

function FetchAllRegQueries(){

    const regqueries=useSelector(state=>state.regUserReducer. regUserQueries);
    const dispatch=useDispatch();



   useEffect(()=>{
       dispatch(fetchRegUserQueries());
   },[])

   
        return (

            
            <div>
                
                
                <h1><center>Registered Users Query Details</center></h1>
              
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Query Id</th> */}
                                {/* <th>name</th>
                                <th>email</th>
                                <th>mobile</th> */}
                                <th>Query</th>
                                <th>Response</th>

                                
                                
                               
                                {/* <th>View</th> */}
                                <th>Respond</th>
                                {/* <th>Update User</th>
                                <th>Delete User</th> */}

                            </tr>
                        </thead>
                        <tbody>{
                            regqueries.length > 0 ?
                            regqueries.map(reg =>
                            
                                <tr>
                                    {/* <td>{reg.user}</td> */}
                                    {/* <td>{reg.queryId}</td> */}
                                    <td>{reg.query}</td>
                                    <td>{reg.feedback}</td>
                                    {
                                          reg.feedback!==null ?
                                          <td>Already Responded</td>
                                          : <td><Link to={"respondToReg/" + reg.queryId}>Respond</Link></td>
                                    }
                                   
                                    

                                    
                                   
                                    

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



export default FetchAllRegQueries;