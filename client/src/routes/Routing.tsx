import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";


//Pages

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import Home from "../pages/Sidebar/AdminOutlet";
//Nested
import Profile from "../pages/ProfilePage/Profile";
import Rooms from "../pages/Rooms/Rooms";

//toast
import { Toaster } from "react-hot-toast";

const Routing = () => {
    return (

        <Router>
            <Toaster />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />}>
                    {/* Nested Routes */}
                    <Route path="me" element={<Profile />} /> 
                    <Route path="rooms" element={<Rooms />} /> 
              
                  
                </Route>

                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default Routing