import React, { useState, useEffect } from "react";
import FeaturedCard from "../HomePage/FeaturedCard";
import "./explore.css";
import { useVideo } from "../../context/videoContext";
import { useCategory } from "../../context/categoryContext";
import Loader from "../../assets/loader/Loader";

const ExplorePage = () => {
  const { getAllVideos, allVideos, cardLoading, cardError } = useVideo();
  const {
    getCategories,
    categoryData,
    ischipLoading,
    chipError,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  useEffect(() => {
    let tempVideos = [...allVideos];
    if (selectedCategory == "All") {
      setFilteredVideos(tempVideos);
    } else {
      tempVideos = tempVideos.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredVideos(tempVideos);
    }
  }, [selectedCategory]);

  return (
    <main className="flex-r">
      <section className="home">
        {!ischipLoading ? (
          categoryData.map((item) => (
            <button
              className="button btn-success"
              key={item._id}
              onClick={() => setSelectedCategory(item.categoryName)}
            >
              {item.categoryName}
            </button>
          ))
        ) : (
          <Loader />
        )}
        <div className="main-container">
          {!cardLoading ? (
            filteredVideos.length > 0 ? (
              filteredVideos.map((item) => (
                <FeaturedCard item={item} key={item._id} />
              ))
            ) : (
              allVideos.map((item) => (
                <FeaturedCard item={item} key={item._id} />
              ))
            )
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
