import { useState } from "react";
import { Button } from "reactstrap";
import { BsSearch } from "react-icons/bs";

const SearchBox = (props) => {
  const { change, wordValue } = props;
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
