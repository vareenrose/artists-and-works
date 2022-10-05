import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NavBar from "./components/Navbar/NavBar";
import PostImage from "./components/PostImage";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create" element={<PostImage />} />
          <Route path="carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
