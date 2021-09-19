import React from "react";
import FullBanner from "./banner";
import HomeNews from "./homeNews";
import Help from "../help";

const Home = (props) => {
  const news = props.news;
  return (
    <div className="main-wrapper">
      <FullBanner />
      <HomeNews news={news} />
      <Help />
    </div>
  );
};

export default Home;
