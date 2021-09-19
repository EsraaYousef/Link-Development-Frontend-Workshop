import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <div className="error-block text-center">
        <h3>Error</h3>
        <p></p>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default Error;
