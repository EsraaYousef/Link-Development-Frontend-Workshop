import React from "react";
import { Link } from "react-router-dom";
import SocialList from "../header/socialLinks";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <ul className="list-links">
                <li>
                  <Link to="">News</Link>
                </li>
                <li>
                  <Link to="">Events</Link>
                </li>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <ul className="list-links">
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Contact Us</Link>
                </li>
                <li>
                  <Link to="">Complains</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-subscribe">
                <h6>Subscribe to Newsletter</h6>
                <form>
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-social">
                <h6>Follow us on</h6>
                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
