import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';


function paymentlanding() {
    return (
        <div>
        <NavBar/>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* <!-- Brand --> */}
                <a class="navbar-brand" href="#">Logo</a>

                {/* <!-- Links --> */}
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Back </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>


                </ul>
            </nav>
            <br />
            
                <div class="container">
                    <h2 class="text-primary , text-center" >Welcome To Payment Page!</h2>
                    
                    <img src="user/assets/images/paymentpage.jpeg" class="thumb-nail" alt="Cinque Terre" width="1000" height="500" />
                </div>
                <div class="container">
                <button type="button" class="btn btn-secondary btn-lg btn-block">Make a Payment</button>
                </div >
                </div>
                <Footer/>
        </div>



    );
}

export default paymentlanding;