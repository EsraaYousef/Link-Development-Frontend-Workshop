import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumb from "../breadcrumb";
import { Link } from "react-router-dom";

import {
  IoHeartOutline,
  IoShareSocial,
  IoLogoTwitter,
  IoMailSharp,
  IoLogoFacebook,
} from "react-icons/io5";
const NewsDetails = (props) => {
  const { news } = useSelector((state) => state);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { id } = useParams();
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
  useEffect(() => {
    let selected = props.news.find((article) => article.id == id);
    // console.log("selectedArticl ==> ", selected);
    setSelectedArticle(selected);
  }, [news]);

  return (
    <>
      <BreadCrumb />
      <section className="news_details_wrapper bg-grey">
        <div className="container">
          <div className="wrap-title">
            <h1 className="section-title">News Details</h1>
          </div>

          {selectedArticle && (
            <div className="details_wrapper card w-shadow w-radius">
              <div className="details_img card-img">
                <img
                  src={selectedArticle.urlToImage}
                  alt={selectedArticle.title}
                />
              </div>
              <div className="details_text card-body">
                <p>{selectedArticle.name}</p>
                <div className="d-flex align-items-start justify-content-between">
                  <h6 className="card-header">{selectedArticle.title}</h6>
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
                      className={
                        isSharingList ? "sharing-list" : "sharing-list hidden"
                      }
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
                </div>
                <p>{selectedArticle.content}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
