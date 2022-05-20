import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWatchLater } from "../../context/watchLaterContext";
import { useLikedVideo } from "../../context/likedVideoContext";
const SingleVideoCard = ({ singleVideo }) => {
  const {
    getWatchLaterVideos,
    removeItemFromWatchLater,
    addItemToWatchLater,
    watchLaterVideos,
  } = useWatchLater();

  const {
    getLikedVideos,
    addItemToLikedVideos,
    removeItemFromLikedVideos,
    LikedVideos,
  } = useLikedVideo();

  useEffect(() => {
    getWatchLaterVideos();
    getLikedVideos();
  }, []);

  return (
    <div className="singleVideoCard">
      <iframe
        // width="100%"
        width="780px"
        height="450px"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`https://www.youtube.com/embed/${singleVideo.url}`}
        title="Youtube video"
      ></iframe>

      <div className="flex flex-justify-space-between">
        <div className="singleVid-content">
          <h4 className="singleVid-contentTitle">{singleVideo.title}</h4>
          <img
            className="reg-avatar avatar singleVid-avatar"
            src={singleVideo.authorImageUrl}
            alt="user"
          />
          <span className="singleVid-durationVideo">
            Duration:{singleVideo.timeDuration}
          </span>
          <span className="singleVid-creatorName">{singleVideo.author}</span>
          <span className="singleVid-viewsCount">
            Views:{singleVideo.views}
          </span>
          {LikedVideos.some((it) => it._id === singleVideo._id) ? (
            <button
              className="m1 button btn-primary btn-with-icon"
              onClick={() => removeItemFromLikedVideos(singleVideo._id)}
            >
              <i className="p1-right fa-solid fa-thumbs-up"></i>
              Remove from Liked
            </button>
          ) : (
            <button
              className="m1 button btn-primary btn-with-icon"
              onClick={() => addItemToLikedVideos(singleVideo)}
            >
              <i className="p1-right fa-solid fa-thumbs-up"></i>
              Add to Liked
            </button>
          )}

          {watchLaterVideos.some((it) => it._id === singleVideo._id) ? (
            <button
              className="m1 button btn-success btn-with-icon"
              onClick={() => removeItemFromWatchLater(singleVideo._id)}
            >
              <i className="p1-right fa-regular fa-clock"></i>Remove from
              Watchlater
            </button>
          ) : (
            <button
              className="m1 button btn-success btn-with-icon"
              onClick={() => addItemToWatchLater(singleVideo)}
            >
              <i className="p1-right fa-regular fa-clock"></i>Add to Watchlater
            </button>
          )}

          <p className="singleVid-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            officiis sit cum soluta recusandae nam distinctio voluptate
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
