import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Header/NavBar";
import Sidebar from "./components/SideBar/Sidebar";

import HomePage from "./pages/HomePage/index";
import HistoryPage from "./pages/HistoryPage/index";
import LikedPage from "./pages/LikedPage/index";
import PlaylistPage from "./pages/PlaylistPage/index";
import ExplorePage from "./pages/ExplorePage/index";

import Login from "./pages/AuthenticationPages/login";
import Signup from "./pages/AuthenticationPages/signup";

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
