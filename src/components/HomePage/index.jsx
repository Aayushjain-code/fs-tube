import React, { useEffect, useState } from "react";
import "./home.css";
import FeaturedCard from "./FeaturedCard.js";

import Loader from "../../assets/loader/Loader.js";
import { useVideo } from "../../context/videoContext.js";
import { useCategory } from "../../context/categoryContext.js";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  let Navigate = useNavigate();
  const { getAllVideos, allVideos, cardLoading, cardError } = useVideo();
  const {
    getCategories,
    categoryData,
    ischipLoading,
    chipError,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  let mustWatchVideos = [];
  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  const getMustWatchVideos = () => allVideos.filter((item) => item.isMustWatch);
  mustWatchVideos = getMustWatchVideos();

  return (
    <>
      <main className="flex-r">
        <section className="home">
          <div>
            <img
              className="banner"
              src="https://images.squarespace-cdn.com/content/v1/57f1462015d5dbf1ae364486/1478095239581-DRBA199HPCGNJ76OZRHK/Screen+Shot+2016-10-24+at+15.05.26.png"
              alt="banner"
            />
            <button className="button btn-warning banner-button">
              <Link className="btn-hero font-bold text-base" to="/explore">
                Watch Now
              </Link>
            </button>
          </div>

          <div className="category-filter">
            {!ischipLoading ? (
              categoryData.map((item) => (
                <button
                  className="button btn-success"
                  key={item._id}
                  onClick={() => {
                    setSelectedCategory(item.categoryName);
                    Navigate("/explore");
                  }}
                >
                  {item.categoryName}
                </button>
              ))
            ) : (
              <Loader />
            )}
          </div>

          <div className="main-container">
            {!cardLoading ? (
              mustWatchVideos.map((item) => (
                <FeaturedCard item={item} key={item._id} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
