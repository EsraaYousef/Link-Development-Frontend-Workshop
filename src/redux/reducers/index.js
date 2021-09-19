import { combineReducers } from "redux";
import { newsReducer, fetchCategories } from "./news";
// import newsDetail from "./newsDetailsReducers";
// import wishlistReducer from "./wishlistReducers";

const rootReducer = combineReducers({
  news: newsReducer,
  newsCategories: fetchCategories,
  // newsDetail: newsDetail,
  //   wishlist: wishlistReducer,
});

export default rootReducer;
