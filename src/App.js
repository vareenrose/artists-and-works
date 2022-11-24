import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostData from "./components/PostContent/PostData";
import Carousel from "./components/Carousel";
import ArtistsTable from "./components/ListContent/ArtistsTable";
import MediaTable from "./components/ListContent/MediaTable";
import ArtWorksTable from "./components/ListContent/ArtWorksTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create" element={<PostData />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="list-artists" element={<ArtistsTable />} />
          <Route path="list-media" element={<MediaTable />} />
          <Route path="list-media" element={<ArtWorksTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
