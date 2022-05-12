import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWatchLater } from "../../context/watchLaterContext";
import { useHistory } from "../../context/historyContext";
import { trimHeading } from "../../utils/Utilities/utilFunctions";
import { usePlaylist } from "../../context/playlistContext";
import { CardVideoPlaylist } from "../HomePage/cardVideoPlaylist";

const FeaturedCard = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
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

  // useEffect(() => {
  //   console.log("playlists:", playlists);
  // });

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
            <i
              className="fa-solid fa-ellipsis-vertical dropDownIcon"
              onClick={() => setDropdown(!dropdown)}
            ></i>
            {dropdown && (
              <ul className="card-dropdown">
                {watchLaterVideos.some((it) => it._id === item._id) ? (
                  <li onClick={() => removeItemFromWatchLater(item._id)}>
                    <i className="fa-regular fa-clock dropIcon"></i>
                    Remove from watch later
                  </li>
                ) : (
                  <li onClick={() => addItemToWatchLater(item)}>
                    <i className="fa-regular fa-clock dropIcon"></i>
                    Add to watch later
                  </li>
                )}

                <li
                  onClick={() => {
                    setIsSavetoPlaylistClicked(true);
                    // setDropdown(!dropdown);
                    // setIsMoreOptions(false);
                  }}
                >
                  <i className="fa-solid fa-list dropIcon"></i>Add to playlist
                </li>
              </ul>
            )}
          </div>
          {/* Playlist div */}

          <div
            className={
              isSavetoPlaylistClicked
                ? "playlist-main-container"
                : "display-none"
            }
            ref={ref}
          >
            <div className="playlist-first-div">
              <h3 className="h3 playlist-saveTo-text">Save to...</h3>
              <i
                className="fas fa-times playlist-cross"
                onClick={() => setIsSavetoPlaylistClicked(false)}
              ></i>
            </div>
            <div>
              {playlists.length > 0 &&
                playlists.map((playlist) => {
                  return (
                    <CardVideoPlaylist
                      playlist={playlist}
                      item={item}
                      key={item._id}
                    />
                  );
                })}
            </div>

            {/* <div className="playlist-second-div">
              <input type="checkbox" className="playlist-checkbox" />
              <span className="playlist-title">Title</span>
            </div> */}
            <div
              className="playlist-third-div"
              onClick={() => {
                setClickedCreateNewPlaylist(true);
                setIsSavetoPlaylistClicked(true);
              }}
            >
              <i className="fas fa-plus playlist-plus"></i>
              <h3 className="h3 new-plyalist-head">Create New Playlist</h3>
            </div>

            <div
              className={
                clickedCreateNewPlaylist
                  ? "playlist-footer-container"
                  : "display-none"
              }
            >
              <input
                type="text"
                placeholder="Playlist Name..."
                className="input-playlist-video-card"
                onChange={(e) => {
                  setPlaylistDetails({
                    ...playlistDetails,
                    title: e.target.value,
                  });
                  setIsSavetoPlaylistClicked(true);
                }}
              />
              <div className="footer-container">
                <button
                  className="btn-primary cancel-btn"
                  onClick={() => setClickedCreateNewPlaylist(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn-primary create-btn"
                  onClick={() => createPlaylistClickHandler()}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
