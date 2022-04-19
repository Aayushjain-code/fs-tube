import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleVideo.css";
import { useWatchLater } from "../../context/watchLaterContext";
import { useLikedVideo } from "../../context/likedVideoContext";
import "./SingleVideoCard.css";
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
        width="100%"
        height="500px"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        // src="https://www.youtube.com/embed/bvNHJJ3Loy8"
        src={`https://www.youtube.com/embed/${singleVideo.url}`}
        title="Youtube video"
      ></iframe>

      <div className="flex flex-justify-space-between">
        <div className="singleVid-content">
          <h4 className="singleVid-contentTitle">{singleVideo.title}</h4>
          <img
            className="reg-avatar avatar singleVid-avatar"
            src="https://boredhumans.b-cdn.net/faces2/606.jpg"
            alt="user"
          />
          <span className="singleVid-durationVideo">
            Duration:{singleVideo.timeDuration}
          </span>
          <span className="singleVid-creatorName">{singleVideo.author}</span>
          <span className="singleVid-viewsCount">
            Views:{singleVideo.views}
          </span>

          <button className="m1 button btn-primary btn-with-icon">
            <i class="p1-right fa-solid fa-thumbs-up"></i>Add to Liked
          </button>

          <button className="m1 button btn-success btn-with-icon">
            <i class="p1-right fa-regular fa-clock"></i>Add to Watchlater
          </button>
          <p className="singleVid-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            officiis sit cum soluta recusandae nam distinctio voluptate
            expedita! Voluptas placeat tempora necessitatibus earum tempore. Quo
            ullam explicabo doloribus itaque quod facilis quos minima, error
            architecto voluptate necessitatibus? Fugit, eum omnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
