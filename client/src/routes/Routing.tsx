import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";


//Pages

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import Home from "../pages/Sidebar/AdminOutlet";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/chat" element={<Home />} >
                </Route>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default Routing