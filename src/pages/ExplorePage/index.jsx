import React, { useState, useEffect } from "react";
import FeaturedCard from "../HomePage/FeaturedCard";
import "./explore.css";
import axios from "axios";

const ExplorePage = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await axios.get("/api/videos");
    console.log(response);
    setData(response.data.videos);
  }, []);

  return (
    <main className="flex-r">
      <section className="home">
        <div className="category-filter2">
          <button className="button btn-success"> All</button>
          <button className="button btn-success"> Category 1</button>
          <button className="button btn-success">Category 2</button>
          <button className="button btn-success">Category 3</button>
        </div>

        <div className="main-container">
          {data.map((item) => {
            return <FeaturedCard item={item} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
