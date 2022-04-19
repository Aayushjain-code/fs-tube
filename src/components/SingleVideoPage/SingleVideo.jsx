import { useEffect, useState } from "react";
import "./SingleVideo.css";
import { useParams } from "react-router-dom";

import SingleVideoCard from "./SingleVideoCard.js";
import { useWatchLater } from "../../context/watchLaterContext";
import { useLikedVideo } from "../../context/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext";
import { useVideo } from "../../context/videoContext";
import LoaderSvg from "../../assets/loader/Loader";
import FeaturedCard from "../HomePage/FeaturedCard";
import SingleVideoFeaturedCard from "./SingleVideoFeaturedCard";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { getSingleVideo, singleVideo, issinglecardLoading, singlecardError } =
    useSingleVideo();
  const { getAllVideos, allVideos, iscardLoading, cardError } = useVideo();

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getSingleVideo(videoId);
    getAllVideos();
  }, [videoId]);

  useEffect(() => {
    let tempVideos = [...allVideos].filter(
      (video) =>
        video.category === singleVideo.category && video._id !== singleVideo._id
    );
    setFilteredVideos(tempVideos);
  }, [singleVideo]);
  return (
    <>
      <main className="flex-r">
        <div className="doc-content single-video-main">
          <section>
            {issinglecardLoading ? (
              <LoaderSvg />
            ) : (
              <SingleVideoCard singleVideo={singleVideo} />
            )}
          </section>
        </div>
        <div className="right-container">
          <section>
            {iscardLoading ? (
              <LoaderSvg />
            ) : filteredVideos.length > 0 ? (
              filteredVideos
                .slice(0, 3)
                .map((item) => (
                  <SingleVideoFeaturedCard item={item} key={item._id} />
                ))
            ) : (
              <div>Failed to load recommended videos</div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleVideoPage;
