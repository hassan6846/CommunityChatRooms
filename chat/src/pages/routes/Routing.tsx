
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure you're importing from react-router-dom
import AllRooms from "../AllRooms/AllRooms";
import LoginPage from "../Login/LoginPage";
import Registration from "../Registration/Registration";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllRooms />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Registration />} />
            </Routes>
        </Router>
    );
};

export default Routing;
