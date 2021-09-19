import { useState } from "react";
import { Link } from "react-router-dom";

import {
  IoHeartOutline,
  IoShareSocial,
  IoCalendarClear,
  IoLogoTwitter,
  IoMailSharp,
  IoLogoFacebook,
} from "react-icons/io5";

const News = (props) => {
  const { news: article } = props;
  // console.log("article", article);

  const [isLiked, setIsLiked] = useState(false);
  const [isLikedClass, setIsLikedClass] = useState(false);
  const [isSharingList, setisSharingList] = useState(false);
  const [isSharingListOpen, setSharingListOpen] = useState(false);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
    setIsLikedClass(!isLikedClass);
  };
  const toggleOpenSharingList = () => {
    setisSharingList(!isSharingList);
    setSharingListOpen(!isSharingListOpen);
  };
  const convertISOStringToMonthDay = (date) => {
    const tempDate = new Date(date).toString().split(" ");
    const formattedDate = `${tempDate[0]} ${+tempDate[2]} ${tempDate[1]} ${
      tempDate[3]
    }`;
    return formattedDate;
  };

  return (
    <div className="card news_item_wrap">
      <div className="card-img">
        <img
          className="img-fluid "
          src={article.urlToImage}
          alt={article.title}
        />
      </div>
      <div className="card-body news_info">
        <div className="buttons-action">
          <span
            onClick={toggleLiked}
            className={isLikedClass ? "btn-fav liked" : "btn-fav"}
          >
            <IoHeartOutline />
          </span>
          <span className="btn-share" onClick={toggleOpenSharingList}>
            <IoShareSocial />
          </span>
          <div
            className={isSharingList ? "sharing-list" : "sharing-list hidden"}
          >
            <Link to="" className="facebook">
              <IoLogoFacebook />
            </Link>
            <Link to="" className="twitter">
              <IoLogoTwitter />
            </Link>
            <Link to="" className="email">
              <IoMailSharp />
            </Link>
          </div>
        </div>
        <h6 className="card-header">
          <Link to={`/news/${article.id}`}>{article.title}</Link>
        </h6>
        <div className="category-type">
          <span className="label label-grey">{article.name}</span>
        </div>
        <p className="news_description">{article.description}</p>
        <div className="news-date">
          <span className="icon">
            <IoCalendarClear />
          </span>
          <span className="date">
            {convertISOStringToMonthDay(article.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default News;
