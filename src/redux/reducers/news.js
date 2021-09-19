import {
  FETCH_NEWS,
  FETCH_CATEGORIES,
  FETCH_NEWS_DETAILS,
  SORT_BY_ALPHABET,
} from "../actions/news";

const initialState = {
  articles: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, ...action.payload };
    case FETCH_NEWS_DETAILS: {
      return { ...state, ...action.payload };
    }
    case SORT_BY_ALPHABET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const fetchCategories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
