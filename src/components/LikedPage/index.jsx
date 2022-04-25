import React from "react";
import "./liked.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoaderSvg from "../../assets/loader/Loader";

import { useLikedVideo } from "../../context/likedVideoContext";
import { useWatchLater } from "../../context/watchLaterContext";
import LikedVideoCard from "./LikedVideoCard";

const LikedPage = ({ item }) => {
  const {
    getLikedVideos,
    LikedVideos,
    isLikedVideosLoading,
    LikedVideosError,
  } = useLikedVideo();

  const { getWatchLaterVideos, watchLaterVideos } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
    getLikedVideos();
  }, []);
  return (
    <main className="flex-r">
      <section className="home">
        {LikedVideos.length > 0 ? (
          <div className="position-relative">
            <h4 className="pdl-3 pdt-3 font-semibold">
              Liked{" : "}
              <span>
                {LikedVideos.length === 1
                  ? "1 video"
                  : `${LikedVideos.length} videos`}
              </span>
            </h4>
          </div>
        ) : (
          <h4 className="pdl-3 pdt-3 font-semibold">Liked Videos Empty</h4>
        )}
        <div className="main-container">
          {isLikedVideosLoading ? (
            <LoaderSvg />
          ) : LikedVideos.length > 0 ? (
            LikedVideos.map((item) => (
              <LikedVideoCard
                key={item._id}
                item={item}
                watchLaterVideos={watchLaterVideos}
                LikedVideos={LikedVideos}
              />
            ))
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default LikedPage;
