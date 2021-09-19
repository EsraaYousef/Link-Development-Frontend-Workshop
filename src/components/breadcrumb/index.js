import React from "react";
import { Link, useHistory } from "react-router-dom";

const BreadCrumb = () => {
  const history = useHistory();
  let activeLink = history.location.pathname
    .substring(1)
    .split("/")
    .join(" > ");

  return (
    <section className="breadcrumbs_wrapper banner_bg">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {activeLink}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumb;
