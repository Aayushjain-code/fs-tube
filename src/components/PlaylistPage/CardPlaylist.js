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
          <Link
            className={`${
              playlist?.videos?.length === 0 ? "disable-link" : "cursor-pointer"
            } container-overlay-img-playlist-card flex flex-justify-center flex-align-center`}
            to={`/playlist/${playlist?._id}/${playlist?.videos[0]?._id}`}
            onClick={() => addVideoToHistory(playlist?.videos[0])}
          >
            <div className="play-icon">
              <h4 className="contentTitle">
                {trimHeading(playlist.title, 22)}
              </h4>
              <span className="font-semibold">{playlist?.videos?.length}</span>{" "}
              <i className="fa-solid fa-play material-icons-outlined text-4xl"></i>
            </div>
          </Link>

          <div className="content">
            <div className="playlist-control">
              <button className="button btn-success">
                <Link to={`/playlist/${playlist._id}`} className="link-to-view">
                  View playlist
                </Link>
              </button>
              <button
                className="button btn-error link-to-view"
                onClick={() => removePlaylist(playlist?._id)}
              >
                Remove <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlaylist;
