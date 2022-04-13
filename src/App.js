import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/header/NavBar";
import Sidebar from "./components/sidebar/Sidebar";

import HomePage from "./pages/home/index";
import HistoryPage from "./pages/history/index";
import LikedPage from "./pages/liked/index";
import PlaylistPage from "./pages/playlist/index";
import ExplorePage from "./pages/explore/index";

import Login from "./pages/loginSignup/login";
import Signup from "./pages/loginSignup/signup";

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
