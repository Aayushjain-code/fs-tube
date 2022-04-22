import { useEffect } from "react";
import { useWatchLater } from "../../context/watchLaterContext";
import Loader from "../../assets/loader/Loader.js";
import "./liked.css";
import WatchLaterCard from "./watchLaterCard";

const WatchLaterPage = () => {
  const {
    getWatchLaterVideos,
    watchLaterVideos,
    isWatchLaterVideoLoading,
    watchlaterVideoError,
  } = useWatchLater();

  useEffect(() => {
    getLikedVideos();
    getWatchLaterVideos();
  }, []);

  return (
    <main className="flex-r">
      <section className="home">
        {watchLaterVideos.length > 0 ? (
          <div>
            <h4 className="singleVid-contentTitle">
              Watch Later Videos{" : "}
              <span>
                {watchLaterVideos.length === 1
                  ? "1 video"
                  : `${watchLaterVideos.length} videos`}
              </span>
            </h4>
          </div>
        ) : (
          <h4>WatchLater Empty</h4>
        )}
        <div className="main-container">
          {isWatchLaterVideoLoading ? (
            <Loader />
          ) : watchLaterVideos?.length > 0 ? (
            watchLaterVideos?.map((item) => (
              <WatchLaterCard
                key={item._id}
                item={item}
                watchLaterVideos={watchLaterVideos}
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

export default WatchLaterPage;
