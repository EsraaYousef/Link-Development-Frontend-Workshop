import React from "react";
import { Link } from "react-router-dom";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

class SocialLinks extends React.Component {
  render() {
    const socialItems = [
      { id: 1, icon: <FaTwitter />, class: "twitter" },
      { id: 2, icon: <FaFacebookF />, class: "facebook" },
      { id: 3, icon: <FaLinkedinIn />, class: "linkedin" },
      { id: 4, icon: <FaYoutube />, class: "youtube" },
      { id: 5, icon: <FaInstagram />, class: "instagram" },
    ];
    const listItems = socialItems.map((item) => (
      <li key={item.id}>
        <Link to="" className={item.class}>
          {item.icon}
        </Link>
      </li>
    ));

    return <ul className="social-list">{listItems}</ul>;
  }
}

export default SocialLinks;
