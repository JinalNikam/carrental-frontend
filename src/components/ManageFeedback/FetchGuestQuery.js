import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getGuestQueryById } from '../../store/actions/GuestActions'


function FetchGuestQuery(props){

    const query=useSelector(state=>state.guestUserReducer.query);
    const dispatch=useDispatch();



   useEffect(()=>{
       dispatch(getGuestQueryById(props.match.params.id));
   },[])

   
        return (
            <div>

                <h1>User Details</h1>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Query Id</th>
                                <th>Query</th>
                                <th>feedback</th>
                                <th>name</th>
                                <th>email</th>
                                <th>mobile</th>
                                
                                
                                {/* <th>Update User</th>
                                <th>Delete User</th> */}

                            </tr>
                        </thead>
                        <tbody>{
                           query!==undefined?
                            
                                <tr>
                                    <td>{query.queryId}</td>
                                    <td>{query.query}</td>
                                    <td>{query.feedback}</td>
                                    <td>{query.name}</td>
                                    <td>{query.email}</td>
                                    <td>{query.mobile}</td>
                                    
                                </tr>



                            

                            : <div>Loading...</div>
                        }
                        </tbody>



                    </table>
                </div>

                



            </div>

        );
    
}



export default FetchGuestQuery;