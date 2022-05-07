import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SingleVideoCard from "./SingleVideoCard.js";
import { useWatchLater } from "../../context/watchLaterContext";
import { useLikedVideo } from "../../context/likedVideoContext";
import { useSingleVideo } from "../../context/singleVideoContext";
import { useVideo } from "../../context/videoContext";
import LoaderSvg from "../../assets/loader/Loader";
import FeaturedCard from "../HomePage/FeaturedCard";
import SingleVideoFeaturedCard from "../SingleVideoPage/SingleVideoFeaturedCard";
import { usePlaylist } from "../../context/playlistContext";

const SingleVideoPage = () => {
  const { singleplaylistId, singlevideoId } = useParams();

  const { getSingleVideo, singleVideo, issinglecardLoading, singlecardError } =
    useSingleVideo();

  const { getVideosFromPlaylist, playlistState } = usePlaylist();
  const { playlistLoading, playlist } = playlistState;

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getVideosFromPlaylist(singleplaylistId);
  }, []);

  useEffect(() => {
    getSingleVideo(singlevideoId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let tempVideos = [...playlist?.videos].filter(
        (video) => video._id !== singlevideoId
      );
      setFilteredVideos(tempVideos);
    }, 0);
    // Used set timeout because the playlist videos
    // needs to be filtered after we fetch from getVideosFromPlaylist
  }, [playlistLoading]);
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
            {playlistLoading ? (
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
