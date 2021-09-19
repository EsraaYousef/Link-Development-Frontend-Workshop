import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Help = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./helpList.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.helpList);
          // console.log("result ==> ", result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="section help_wrapper">
        <div className="container">
          <div className="main-title">
            <h1>How we have helped</h1>
            <p>
              See how Al Foundation have promoted change locally and to the
              world
            </p>
          </div>
          <div className="shapes_list_wrapper">
            {items.map((item) => (
              <div className="shape_wrapper rotated-square" key={item.id}>
                <div className="shape_body">
                  <img src={item.icon} className="shape_icon" alt="icon" />
                  <p className="shape_title">{item.title}</p>
                  <Link
                    className="more_link"
                    to={{ pathname: "https://google.com" }}
                    target="_blank"
                    aria-label="external"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Help;
