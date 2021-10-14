import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegQueryById } from '../../store/actions/RegUserActions'


function FetchRegQuery(props) {

    const query = useSelector(state => state.regUserReducer.query);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getRegQueryById(props.match.params.id));
    }, [])


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



                            {/* <th>Update User</th>
                                <th>Delete User</th> */}

                        </tr>
                    </thead>
                    <tbody>{
                        query !== undefined ?

                            <tr>
                                
                                <td>{query.queryId}</td>
                                <td>{query.query}</td>
                                <td>{query.feedback}</td>


                            </tr>





                            : <div>Loading...</div>
                    }
                    </tbody>



                </table>
            </div>





        </div>

    );

}



export default FetchRegQuery;