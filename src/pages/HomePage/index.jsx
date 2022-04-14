import React from "react";
import "./home.css";
import FeaturedCard from "./FeaturedCard";
const HomePage = () => {
  return (
    <>
      <main className="flex-r">
        <section className="home">
          <div>
            <img
              className="banner"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uSkKDgMvPF5dBoDyGpuDIioVAaUZ3q4-8A&usqp=CAU"
              alt=""
            />
            <button className="button btn-success banner-button">
              Watch Now
            </button>
          </div>
          <div className="category-filter">
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
    </>
  );
};

export default HomePage;
