import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/header/NavBar.js";
import Sidebar from "./components/sidebar/sidebar.js";

import HomePage from "./components/HomePage/index.jsx";
import HistoryPage from "./components/HistoryPage/index";
import LikedPage from "./components/LikedPage/index";
import PlaylistPage from "./components/PlaylistPage/index";
import ExplorePage from "./components/ExplorePage/index";
import WatchLaterPage from "./components/WatchLaterPage/index";

import Login from "./components/AuthenticationPages/login";
import Signup from "./components/AuthenticationPages/signup";
import { RestrictAuth } from "./components/ReqResAuth/RestrictAuth";
import { RequireAuth } from "./components/ReqResAuth/RequireAuth";
import SingleVideoPage from "./components/SingleVideoPage/SingleVideo";

import PlaylistDetails from "./components/PlaylistPage/PlaylistDetails";
import SingleVideoPlaylist from "./components/PlaylistPage/SingleVideoPlaylist";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route
          path="/playlist/:playlistId"
          element={<PlaylistDetails />}
          exact
        />
        <Route
          path="/playlist/:singleplaylistId/:singlevideoId"
          element={<SingleVideoPlaylist />}
          exact
        />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/singlevideo/:videoId" element={<SingleVideoPage />} />
        <Route element={<RestrictAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/watchlater" element={<WatchLaterPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
