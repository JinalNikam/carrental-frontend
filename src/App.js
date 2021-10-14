import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Landing/Home';
import FetchCar from './components/Car/FetchCar';
import FetchCarByBrand from './components/Car/SearchCarsByBrand';
import FetchCarByColor from './components/Car/SearchCarsByColor';
import FetchCarByType from './components/Car/SearchCarsByType';
import FetchCarByPrice from './components/Car/SearchCarsByPrice';
import AboutUs from './components/AboutUs/AboutUs';
import UserDashboard from './components/Dashboard/UserDashboard';
import Logout from './components/Logout/Logout';

import FetchAllGuestQueries from './components/ManageFeedback/FetchAllGuestQueries';
import FetchAllRegQueries from './components/ManageFeedback/FetchAllRegQueries';
import FetchGuestQuery from './components/ManageFeedback/FetchGuestQuery';
import FetchRegQuery from './components/ManageFeedback/FetchRegQuery';
import GuestQueryForm from './components/ManageFeedback/GuestQueryForm';
import ThankYouPage from './components/ManageFeedback/ThankYouPage';
import AdminGetAllQueries from './components/ManageFeedback/AdminGetAllQueries';
import RegQueryForm from './components/ManageFeedback/RegQueryForm';
import RespondToGuest from './components/ManageFeedback/RespondToGuest';
import RespondToReg from './components/ManageFeedback/RespondToReg';

import ContactUs from './components/User/ContactUs';
import FetchAllContacts from './components/ContactUs/FetchAllContacts';
import SaveContacts from './components/ContactUs/SaveContacts';
import DeleteContact from './components/ContactUs/DeleteContact';
import UpdateContact from './components/ContactUs/UpdateContact';
import BookedCars from './components/Admin/BookedCars';
import Subscriber from './components/Admin/Subscriber';
import FetchAllCarsByAdmin from './components/Car/FetchAllCarsByAdmin';
import FetchAllUser from './components/Admin/FetchAllUser';
import AdminDashboard from './components/Dashboard/AdminDashboard';

import Registration from './components/RegisterOrLogin/Registration';
import Login from './components/RegisterOrLogin/Login';
import FetchUser from './components/Admin/UserBookingQuery';
import UpdateUser from './components/User/UpdateUser';
import DeleteUser from './components/User/DeleteUser';
import Profile from './components/User/Profile';
import ChangePassword from './components/User/ChangePassword';


import FetchBooking from './components/Booking/FetchBooking';
import FetchAllBooking from './components/Booking/FetchAllBooking';
import SaveBooking from './components/Booking/SaveBooking';
import DeleteBooking from './components/Booking/DeleteBooking';
import SavePayment from './components/Booking/SavePayment';
import paymentlanding from './components/Booking/PaymentLanding';

import SaveCar from './components/Car/SaveCar';
import UpdateCar from './components/Car/UpdateCar';
import DeleteCar from './components/Car/DeleteCar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/fetchcar/:id" component={FetchCar} />
        <Route path="/fetchByBrand" component={FetchCarByBrand} />
        <Route path="/fetchByColor" component={FetchCarByColor} />
        <Route path="/fetchByType" component={FetchCarByType} />
        <Route path="/fetchByPrice" component={FetchCarByPrice} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/userDashboard" component={UserDashboard} />
        <Route path="/logout" component={Logout} />

        <Route path="/contactus" component={ContactUs} />
        <Route path="/fetchAllContacts" component={FetchAllContacts} />
        <Route path="/fetchAllGuestQueries" component={FetchAllGuestQueries} />
        <Route path="/fetchAllRegQueries" component={FetchAllRegQueries} />

        <Route path="/fetchGuestQuery/:id" component={FetchGuestQuery} />
        <Route path="/fetchRegQuery/:id" component={FetchRegQuery} />
        {/* <Route path='/update/:id' component={SendFeedbackForm}/> */}
        <Route path='/add' component={GuestQueryForm} />
        <Route path='/thankyou' component={ThankYouPage} />

        <Route path="/getAllQueries" component={AdminGetAllQueries} />

        <Route path="/addRegQuery" component={RegQueryForm} />

        <Route path="/respondToGuest/:id" component={RespondToGuest} />

        <Route path="/respondToReg/:id" component={RespondToReg} />

        <Route path="/bookedcars" component={BookedCars} />
        <Route path="/subscribers" component={Subscriber} />
        <Route path="/AllCars" component={FetchAllCarsByAdmin} />
        <Route path="/AllUsers" component={FetchAllUser} />
        <Route path="/save" component={SaveContacts} />
        <Route path="/update/:id" component={UpdateContact} />
        <Route path="/delete/:id" component={DeleteContact} />
        <Route path="/admindashboard" component={AdminDashboard} />

        <Route path="/fetchuser/:id" component={FetchUser} />
        {/* <Route path="/fetchalluser" component={FetchAllUser} /> */}
        <Route path="/updateuser/:id" component={UpdateUser} />
        <Route path="/deleteuser/:id" component={DeleteUser} />

        <Route path="/profile" component={Profile} />

        <Route path="/changepassword/:id" component={ChangePassword} />

        <Route path="/fetchbooking/:id" component={FetchBooking} />
        <Route path="/fetchallbooking" component={FetchAllBooking} />
        <Route path="/savebooking" component={SaveBooking} />
        <Route path="/deletebooking/:id" component={DeleteBooking} />
        <Route path="/savepayment" component={SavePayment} />
        <Route path="/paymentlanding" component={paymentlanding} />

        <Route path="/savecar" component={SaveCar} />
        <Route path="/updatecar/:id" component={UpdateCar} />
        <Route path="/deletecar/:id" component={DeleteCar} />

      </Switch>
    </Router>
  );
}

export default App;
