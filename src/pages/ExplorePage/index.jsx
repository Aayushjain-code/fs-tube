import React from "react";
import FeaturedCard from "../HomePage/FeaturedCard";
import "./explore.css";

const ExplorePage = () => {
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
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
