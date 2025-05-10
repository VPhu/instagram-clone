import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./pages/GlobalStyles/index";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/ProfilePage/ProfilePage";
import Explore from "./pages/Explore/Explore";
import Reels from "./pages/Reels/Reels";
import Messages from "./pages/Messages/Messages";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/reels" element={<Reels/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </Router>
    </GlobalStyles>
  );
}

export default App;
