import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

function ThankYouPage() {
  return (
    <div>
      <NavBar />
      <div class="jumbotron text-center">

        <h1 class="display-3">Thank You!</h1>
        <p class="lead"><strong>Please check back this page in some time</strong> for feedback</p>
        <hr></hr>
        <p>
          Having trouble? <Link to="/contactus">Contact us</Link>
        </p>
        <p class="lead">
          <Link to={"/"} >Continue to homepage</Link>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default ThankYouPage;