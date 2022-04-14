import React, { useState } from "react";
import "./FeaturedCard.css";
const FeaturedCard = () => {
  const [dropdown, setDropdown] = useState(false);
  const trimHeading = (word, n) => {
    if (word.length > n) {
      return word.substring(0, n - 3) + "...";
    }
    return word;
  };
  return (
    <div className="category">
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uSkKDgMvPF5dBoDyGpuDIioVAaUZ3q4-8A&usqp=CAU"
              alt=""
            ></img>
          </div>
          <div className="content">
            <img
              class="sm-avatar avatar"
              src="https://boredhumans.b-cdn.net/faces2/606.jpg"
              alt="user"
            />
            <h4 className="contentTitle">
              {trimHeading(" Title of the video goes here dsd sdsd", 32)}
            </h4>
            <span className="durationVideo">28 Min</span>
            <span className="creatorName">
              {trimHeading(" Title of the video goes", 22)}
            </span>
            <span className="viewsCount">views count</span>
            <i
              className="fa-solid fa-ellipsis-vertical icon"
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
      </div>
    </div>
  );
};

export default FeaturedCard;
