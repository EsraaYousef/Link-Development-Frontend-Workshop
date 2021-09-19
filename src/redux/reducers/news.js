import {
  FETCH_NEWS,
  FETCH_CATEGORIES,
  FETCH_NEWS_DETAILS,
  SORT_BY_ALPHABET,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
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

// export const wishlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_WISHLIST:
//       return { wishlist: action.payload };
//     case REMOVE_FROM_WISHLIST:
//       return { wishlist: action.payload };

//     default:
//       return state;
//   }
// };
