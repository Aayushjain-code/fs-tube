import React, { useState } from "react";
import { Link } from "react-router-dom";
const HistoryCard = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };
  return (
    <div className="category" key={item._id}>
      <div className="box-container">
        <Link to={`/singlevideo/${item._id}`}>
          <div className="box">
            <div className="image">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="content">
              <img
                className="md-avatar avatar"
                src="https://boredhumans.b-cdn.net/faces2/606.jpg"
                alt="user"
              />
              <h4 className="contentTitle">{trimHeading(item.title, 22)}</h4>
              <span className="durationVideo">{item.timeDuration}</span>
              <span className="creatorName">
                {trimHeading(item.author, 22)}
              </span>
              <span className="viewsCount">{item.views} Views</span>
              <i
                className="fa-solid fa-ellipsis-vertical dropDownIcon"
                onClick={() => setDropdown(!dropdown)}
              ></i>
              {dropdown && (
                <ul className="card-dropdown">
                  <li>
                    <i className="fa-regular fa-clock dropIcon"></i>Add to watch
                    later
                  </li>
                  <li>
                    <i className="fa-solid fa-list dropIcon"></i>Add to playlist
                  </li>
                </ul>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HistoryCard;
