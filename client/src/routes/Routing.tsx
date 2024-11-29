import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";


//Pages

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import Home from "../pages/Sidebar/AdminOutlet";
//Nested
import Profile from "../pages/ProfilePage/Profile";
import Rooms from "../pages/Rooms/Rooms";
import NewRooms from "../pages/CreateRooms/NewRooms";
import Inbox from "../pages/Inbox/Inbox";
import SearchPeople from "../pages/SearchPeople/SearchPeople";
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
                    <Route path="me" element={<Profile />} /> {/* /home/me */}
                    <Route path="rooms" element={<Rooms />} /> {/* /home/rooms */}
                    <Route path="create-new" element={<NewRooms />} /> {/* /home/create-new */}
                    <Route path="inbox" element={<Inbox />} /> {/* /home/inbox */}
                    <Route path="search" element={<SearchPeople />} /> {/* /home/search */}
                </Route>

                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
export default Routing