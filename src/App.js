import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import AllNews from "./components/news/newsList";
import NewsDetails from "./components/news/newsDetails";

import Notfound from "./components/error";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, fetchCategories } from "./redux/actions";

const App = () => {
  const { news } = useSelector((state) => state);
  const { newsCategories } = useSelector((state) => state);
  const [newsAndCategories, setNewsAndCategories] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    // console.log("--news--", news.articles);
    // console.log("--categories--", newsCategories.sourceCategory);
    if (news.articles && newsCategories.sourceCategory) {
      let newsAndCatsArr = news.articles.map((article) => ({
        ...newsCategories.sourceCategory.find(
          (category) => category.id === article.sourceID && category
        ),
        ...article,
      }));
      setNewsAndCategories(newsAndCatsArr);
    }
  }, [news, newsCategories]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} news={newsAndCategories} />}
        />
        <Route
          path="/news"
          exact
          render={(props) => <AllNews {...props} news={newsAndCategories} />}
        />
        <Route
          path="/news/:id"
          exact
          render={(props) => (
            <NewsDetails {...props} news={newsAndCategories} />
          )}
        />
        <Route path="*" exact component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
