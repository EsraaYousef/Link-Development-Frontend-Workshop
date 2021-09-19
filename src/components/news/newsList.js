import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import News from "./index";
import Loading from "../loader";
import Pagination from "../pagination";
import SearchBox from "../header/searchBox";
import { BiSort } from "react-icons/bi";

import { sortByAlphabet } from "../../redux/actions";

const NewsList = (props) => {
  const articles = props.news;
  const dispatch = useDispatch();
  // console.log("news in All news ---> ", props.news);
  //
  const [allData, setAllData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [activeStep, setActiveStep] = useState(0 || 0);
  const [pages, setPages] = useState([]);
  const [numPages, setNumPages] = useState(0);

  const getAllData = async () => {
    let response = await articles;
    setAllData(response);
    setNumPages(Math.ceil(articles.length / 5));
  };

  useEffect(() => {
    getAllData();
    if (articles) {
      let num = allData.slice(activeStep * 5, activeStep * 5 + 6);
      setPages(num);
    }
  }, [allData, activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === numPages) {
        return prevActiveStep;
      }
      return prevActiveStep + 1;
    });
    scrollToTop();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return prevActiveStep;
      }
      return prevActiveStep - 1;
    });
    scrollToTop();
  };

  const handlePage = (page) => {
    setActiveStep(page - 1);
    scrollToTop();
  };
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  // console.log("single pages", pages);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = articles.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setAllData([allData]);
    } else {
      setPages(newFilter);
    }
  };
  const setFilterParam = (event) => {
    const optionValue = event.target.value;
    console.log("optionValue", optionValue);
    setWordEntered(optionValue);
    const newFilter = articles.filter((value) => {
      return value.title.toLowerCase().includes(optionValue.toLowerCase());
    });
    if (optionValue === "") {
      setAllData([allData]);
    } else {
      setPages(newFilter);
    }
  };

  const viewValue = (event) => {
    console.log(event.target.value);
  };
  // let filteredDates = articles.filter(
  //   (article) =>
  //     new Date(article.publishedAt) > new Date("2020-09-14T07:38:00Z") &&
  //     new Date(article.publishedAt) < new Date("2020-09-17T00:00:00Z")
  // );

  // console.log("ffilteredDates ==> ", filteredDates);

  return (
    <section className="bg-grey news_wrapper">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
            <div className="form-group">
              <label className="control-label">From</label>
              <input
                className="form-control"
                type="datetime-local"
                onChange={viewValue}
                id="startDate"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
            <div className="form-group">
              <label className="control-label">To</label>
              <input
                className="form-control"
                type="datetime-local"
                onChange={viewValue}
                id="endDate"
              />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12">
            <div className="form-group">
              <label className="control-label">Category</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setFilterParam(e.target.value);
                }}
              >
                <option value="All">select</option>
                {pages.length &&
                  pages.map((news) => (
                    <option value={news.name} key={news.id}>
                      {news.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
            <div className="main-search form-group">
              <SearchBox
                {...props}
                change={handleFilter}
                pages={pages}
                wordValue={wordEntered}
              />
            </div>
          </div>
          <div className="col-xl-1 col-lg-6 col-md-12 col-sm-12">
            <div className="form-group">
              <div className="sorting-block">
                <button
                  className="btn btn-transparent"
                  onClick={() => dispatch(sortByAlphabet(pages))}
                >
                  Sort by <BiSort />
                </button>
              </div>
            </div>
          </div>
        </div>
        {pages.length > 0 ? (
          <>
            <div className="row">
              {pages.length &&
                pages.map((news) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={news.id}
                  >
                    <News news={news} />
                  </div>
                ))}
            </div>
            <div className="row">
              <Pagination
                next={handleNext}
                back={handleBack}
                page={handlePage}
                numPages={numPages}
                activeStep={activeStep}
              />
            </div>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </section>
  );
};

export default NewsList;
