import { useState, useDispatch } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { BsSearch } from "react-icons/bs";

import { search } from "../../redux/actions/news";

const SearchBox = (props) => {
  const articles = props.news;
  const { pages, change, wordValue } = props;
  const [textboxOpen, setTextboxOpen] = useState(false);
  const toggleTextbox = () => setTextboxOpen(!textboxOpen);

  return (
    <>
      <div
        className={
          textboxOpen ? "search-wrapper show-textbox" : "search-wrapper"
        }
      >
        <input
          type="text"
          className="form-control"
          placeholder="search"
          value={wordValue}
          onChange={change}
        />
        <Button type="button" color="transparent" onClick={toggleTextbox}>
          <BsSearch />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;