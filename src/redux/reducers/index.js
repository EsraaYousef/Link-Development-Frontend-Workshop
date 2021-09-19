import { combineReducers } from "redux";
import { newsReducer, fetchCategories } from "./news";
// import newsDetail from "./newsDetailsReducers";

const rootReducer = combineReducers({
  news: newsReducer,
  newsCategories: fetchCategories,
  // wishlist: wishlistReducer,
  // newsDetail: newsDetail,
});

export default rootReducer;
