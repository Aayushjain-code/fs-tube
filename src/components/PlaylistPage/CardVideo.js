import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "../../context/historyContext";
import { usePlaylist } from "../../context/playlistContext";
import { useWatchLater } from "../../context/watchLaterContext";

import { trimHeading } from "../../utils/Utilities/utilFunctions";

const CardVideo = ({ item }) => {
  const [isSavetoPlaylistClicked, setIsSavetoPlaylistClicked] = useState(false);
  const [clickedCreateNewPlaylist, setClickedCreateNewPlaylist] =
    useState(false);
  // const [isMoreOptions, setIsMoreOptions] = useState(false);

  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
    image: {
      src: "",
      alt: "",
    },
    isInputError: false,
  });

  const { getAllPlaylists, addNewPlaylist, playlistState } = usePlaylist();

  const ref = useRef(null);

  const {
    addNewplaylistLoading,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
    playlists,
    playlistError,
  } = playlistState;

  const location = useLocation();

  useEffect(() => {
    const clickHandler = (event) => {
      if (
        isSavetoPlaylistClicked &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsSavetoPlaylistClicked(false);
      }
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [isSavetoPlaylistClicked]);

  useEffect(() => {
    getAllPlaylists();
  }, [
    clickedCreateNewPlaylist,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
  ]);

  useEffect(() => {
    console.log(playlists);
  });

  useEffect(() => {
    setTimeout(() => {
      setPlaylistDetails({ ...playlistDetails, isInputError: false });
    }, 2000);
  }, [playlistDetails.isInputError]);

  const createPlaylistClickHandler = () => {
    if (playlistDetails.title === "") {
      setPlaylistDetails({ ...playlistDetails, isInputError: true });
    } else {
      setClickedCreateNewPlaylist(false);
      addNewPlaylist(playlistDetails);
      playlistDetails.title = "";
    }
    setIsSavetoPlaylistClicked(true);
  };

  const {
    getWatchLaterVideos,
    removeItemFromWatchLater,
    addItemToWatchLater,
    watchLaterVideos,
  } = useWatchLater();

  const { addVideoToHistory } = useHistory();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);

  return (
    <div className="category" key={item._id}>
      <div className="box-container">
        <div className="box">
          <Link
            to={`/singlevideo/${item._id}`}
            onClick={() => addVideoToHistory(item)}
          >
            <div className="image">
              <img src={item.imageUrl} alt={item.title} loading="lazy" />
            </div>
          </Link>
          <div className="content">
            <img
              className="md-avatar avatar"
              src={item.authorImageUrl}
              alt="user"
            />
            <h4 className="contentTitle">{trimHeading(item.title, 22)}</h4>
            <span className="durationVideo">{item.timeDuration}</span>
            <span className="creatorName">{trimHeading(item.author, 22)}</span>
            <span className="viewsCount">{item.views} Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
