import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "../../context/historyContext";
import { usePlaylist } from "../../context/playlistContext";
import "./CardPlaylist.css";

import { trimHeading } from "../../utils/Utilities/utilFunctions";

const CardPlaylist = ({ playlist }) => {
  const PlaylistEmptyImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWiAo1vXtWuVdk6wGnRMtx01oRkFMgN3UuA&usqp=CAU";
  const { addVideoToHistory } = useHistory();
  const { removePlaylist } = usePlaylist();

  if (playlist?.videos?.length !== 0) {
    var src = playlist.videos[0].imageUrl;
    var alt = playlist.videos[0].title;
  }
  return (
    <div className="category" key={playlist._id}>
      <div className="box-container">
        <div className="box">
          <Link
            to={`/playlist/${playlist?._id}/${playlist?.videos[0]?._id}`}
            onClick={() => addVideoToHistory(playlist)}
          >
            <div className="image">
              {playlist?.videos?.length === 0 ? (
                <img
                  className="img-card-playlist"
                  src={PlaylistEmptyImage}
                  loading="lazy"
                  alt="image-empty-playlist"
                />
              ) : (
                <img
                  className="img-card-playlist"
                  src={src}
                  loading="lazy"
                  alt={alt}
                />
              )}
            </div>
            {/* <div className="flex flex-column">
              <span className="font-semibold">{playlist?.videos?.length}</span>
              <span className="material-icons-outlined text-4xl">
                playlist_play
              </span>
            </div> */}
          </Link>
          <div className="content">
            <h4 className="contentTitle">{trimHeading(playlist.title, 22)}</h4>

            <ul className="card-dropdown nav-button">
              <li>
                <Link to={`/playlist/${playlist._id}`}>
                  <i className="fa-regular fa-clock dropIcon"></i>
                  view playlist
                </Link>
              </li>
              <li onClick={() => removePlaylist(playlist?._id)}>
                <i className="fa-regular fa-clock dropIcon"></i>
                Remove
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlaylist;
