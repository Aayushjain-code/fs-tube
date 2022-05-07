import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import LoaderSvg from "../../assets/loader/Loader";
import { usePlaylist } from "../../context/playlistContext";
import FeaturedCard from "../HomePage/FeaturedCard";
import CardVideo from "./CardVideo";
// import { CardVideoPlaylist } from "./cardVideoPlaylist";

const PlaylistDetails = () => {
  const [dropdown, setDropdown] = useState(false);

  const { getVideosFromPlaylist, removePlaylist, playlistState } =
    usePlaylist();

  const {
    playlistLoading,
    playlist,
    removeplaylistLoading,
    removeVideoFromPlaylistLoading,
  } = playlistState;
  const { playlistId } = useParams();

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeVideoFromPlaylistLoading]);

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeplaylistLoading]);

  return (
    <main className="flex-r">
      <section className="home">
        {playlist?.videos?.length > 0 ? (
          <div className="position-relative">
            <h4 className="pdl-3 pdt-3 font-semibold">
              {`${playlist.title} Playlist`}{" "}
              <span>
                {playlist.videos.length === 1
                  ? "1 video"
                  : `${playlist.videos.length} videos`}
              </span>
            </h4>
          </div>
        ) : (
          <h4 className="pdl-3 pdt-3 font-semibold">playlist Empty</h4>
        )}
        <div className="main-container">
          {playlistLoading ? (
            <LoaderSvg />
          ) : playlist?.videos?.length > 0 ? (
            playlist.videos.map((item) => (
              <FeaturedCard key={item._id} item={item} />
            ))
          ) : (
            "Page Empty"
          )}
        </div>
      </section>
    </main>
  );
};

export default PlaylistDetails;
