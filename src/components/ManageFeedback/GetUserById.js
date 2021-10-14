import React, { useEffect, useState } from "react";
import axios from "axios";



function getUserById(props) {

    const [user, setUser] = useState(undefined)

    useEffect(() => {

        axios.get('http://localhost:8080/user/getuserdetails/' + props.match.params.id)
            .then(resp => setUser(resp.data));
    })

    return (




        <div>
            <h2>User Details</h2>
            {
                user !== undefined &&
                <div>
                    <p>UserName:{user.userName}</p>
                    <p>Password:{user.password}</p>
                    <p>Address:{user.address}</p>
                    <p>EmailId:{user.emailId}</p>
                    <p>MobileNo:{user.mobileNo}</p>
                </div>

            }






        </div>
    )

}

export default getUserById;