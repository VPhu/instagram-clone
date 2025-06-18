import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./pages/GlobalStyles/index";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/ProfilePage/ProfilePage";
import Explore from "./pages/Explore/Explore";
import PrivateRoute from "./component/layout/PrivateRoute";
import AuthRoute from "./component/layout/AuthRoute";
import { ToastContainer } from "react-toastify";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
          <Route path="/Signup" element={<AuthRoute><Signup /></AuthRoute>} />
          <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/explore" element={<PrivateRoute><Explore/></PrivateRoute>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </GlobalStyles>
  );
}

export default App;
