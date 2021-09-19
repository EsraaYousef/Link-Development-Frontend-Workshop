import {
  FETCH_NEWS,
  FETCH_CATEGORIES,
  FETCH_NEWS_DETAILS,
  SORT_BY_ALPHABET,
} from "./news";

const news_listing = "https://api.npoint.io/e2534d5412765bf36702";
const news_category_listing = "https://api.npoint.io/c138bb84dc0b94ec5a18";

export const fetchNews = () => (dispatch) => {
  fetch(news_listing)
    .then((res) => res.json())
    .catch((err) =>
      fetch("news_listing.json")
        .then((res) => res.json())
        .then((data) => data)
    )
    .then((data) => {
      dispatch({ type: FETCH_NEWS, payload: data });
    });
};
export const fetchCategories = () => (dispatch) => {
  fetch(news_category_listing)
    .then((res) => res.json())
    .catch((err) =>
      fetch("news_category-listing.json")
        .then((res) => res.json())
        .then((data) => data)
    )
    .then((data) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data });
    });
};

export const fetchNewsById = (news, id) => (dispatch) => {
  dispatch({
    type: FETCH_NEWS_DETAILS,
    payload: news.articles.find((article) => article.id === id),
  });
};

export const sortByAlphabet = (news) => ({
  type: SORT_BY_ALPHABET,
  payload: news.sort((a, b) => {
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    }
    return 0;
  }, console.log("Articles after sorting ==> ", news)),
});
