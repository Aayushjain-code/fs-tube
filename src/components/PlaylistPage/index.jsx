import React from "react";
import "./playlist.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context/playlistContext";
import LoaderSvg from "../../assets/loader/Loader";
import CardPlaylist from "./CardPlaylist";

const PlaylistPage = () => {
  const { getAllPlaylists, playlistState } = usePlaylist();
  const { playlistLoading, playlists, playlistError, removeplaylistLoading } =
    playlistState;

  useEffect(() => {
    getAllPlaylists();
  }, [removeplaylistLoading]);

  return (
    <main className="flex-r">
      <section className="home">
        {playlists.length > 0 ? (
          <div className="position-relative">
            <h4 className="pdl-3 pdt-3 font-semibold">
              Playlists {" : "}
              <span>
                {playlists.length === 1
                  ? "1 video"
                  : `${playlists.length} videos`}
              </span>
            </h4>
          </div>
        ) : (
          <h4 className="pdl-3 pdt-3 font-semibold">playlists Videos Empty</h4>
        )}
        <div className="main-container">
          {playlistLoading ? (
            <LoaderSvg />
          ) : playlists.length > 0 ? (
            playlists.map((playlist) => (
              <CardPlaylist playlist={playlist} key={playlist._id} />
            ))
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default PlaylistPage;
