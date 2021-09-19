import React from "react";
import { Link } from "react-router-dom";
import News from "../news";
import Loading from "../loader";

const HomeNews = (props) => {
  const articles = props.news;
  const HomeArticles = articles.filter((item) => item.showOnHomepage === true);
  // console.log("news in HomeArticles ---> ", HomeArticles);

  return (
    <section className="bg-white news_wrapper">
      <div className="container">
        <div className="wrap-title">
          <h1 className="section-title">Latest News</h1>
          <Link to="/news" className="second-color w-arrow">
            View All
          </Link>
        </div>
        <div className="row">
          {HomeArticles.length > 0 ? (
            <>
              {HomeArticles.length &&
                HomeArticles.map((news) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={news.id}
                  >
                    <News news={news} />
                  </div>
                ))}
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
