import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar.js";
import Sidebar from "./components/sidebar/sidebar.js";

import HomePage from "./";
import HistoryPage from "./components/HistoryPage/index";
import LikedPage from "./pages/LikedPage/index";
import PlaylistPage from "./pages/PlaylistPage/index";
import ExplorePage from "./pages/ExplorePage/index";

import Login from "./components/AuthenticationPages/login";
import Signup from "./components/AuthenticationPages/signup";

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
