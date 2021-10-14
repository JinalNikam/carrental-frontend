import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import FetchAllGuestQueries from "./FetchAllGuestQueries";
import FetchAllRegQueries from "./FetchAllRegQueries";

function getAllQueries() {

    return (
        <div>
            <NavBar />
            <FetchAllRegQueries /><br></br>
            <FetchAllGuestQueries />
            <div>
                <Link to="/"><button className="btn btn-primary">Back</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default getAllQueries;