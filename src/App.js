import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/Header/NavBar.js";
import Sidebar from "./Components/SideBar/Sidebar.js";

import HomePage from "./Pages/HomePage/index";
import HistoryPage from "./Pages/HistoryPage/index";
import LikedPage from "./Pages/LikedPage/index";
import PlaylistPage from "./Pages/PlaylistPage/index";
import ExplorePage from "./Pages/ExplorePage/index";

import Login from "./Pages/AuthenticationPages/login";
import Signup from "./Pages/AuthenticationPages/signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/explore" element={<ExplorePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
