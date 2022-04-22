import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "../../context/historyContext";
import { useWatchLater } from "../../context/watchLaterContext";

const WatchLaterCard = ({ item, watchLaterVideos }) => {
  const [dropdown, setDropdown] = useState(false);
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };

  const { getWatchLaterVideos, removeItemFromWatchLater, addItemToWatchLater } =
    useWatchLater();

  const { addVideoToHistory } = useHistory();

  return (
    <div className="category" key={item._id}>
      <div className="box-container">
        <div className="box">
          <Link
            onclick={(() => console.log(item), addVideoToHistory(item))}
            to={`/singlevideo/${item._id}`}
          >
            <div className="image">
              <img src={item.imageUrl} alt={item.title} loading="lazy" />
            </div>
          </Link>
          <div className="content">
            <img
              className="md-avatar avatar"
              src={item.authorImageUrl}
              alt="user"
            />
            <h4 className="contentTitle">{trimHeading(item.title, 22)}</h4>
            <span className="durationVideo">{item.timeDuration}</span>
            <span className="creatorName">{trimHeading(item.author, 22)}</span>
            <span className="viewsCount">{item.views} Views</span>
            <i
              className="fa-solid fa-ellipsis-vertical dropDownIcon"
              onClick={() => setDropdown(!dropdown)}
            ></i>
            {dropdown && (
              <ul className="card-dropdown">
                {/* {watchLaterVideos.length > 0 &&
                watchLaterVideos.some((it) => it._id === item._id) ? ( */}
                <li onClick={() => removeItemFromWatchLater(item._id)}>
                  <i className="fa-regular fa-clock dropIcon"></i>
                  Remove from watch later
                </li>
                {/* ) : (
                  <li onclick={() => addItemToWatchLater(item)}>
                    <i className="fa-regular fa-clock dropIcon"></i>Add to Watch
                    later
                  </li>
                )} */}

                <li>
                  <i className="fa-solid fa-list dropIcon"></i>Add to playlist
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterCard;
