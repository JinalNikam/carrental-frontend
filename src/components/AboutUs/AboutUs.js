import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function AboutUs() {
    return (
        <div>
            <NavBar />
            <div className="container">

                <h2 style={{ "color": "green" }}> Drive in style...</h2>
                <br/>
                <h3 style={{ "color": "royalblue" }}>A ride is always available for you 24/7</h3>
                <br/>
                <p style={{"color":"navy"}}>
                    We are a car rental service available to you 24/7. We provide the most
                    comfortable and cheapest rides in the country. Hook us up for your trips and
                    get the best confort can offer.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;