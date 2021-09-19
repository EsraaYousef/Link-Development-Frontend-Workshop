import { useState } from "react";

import { NavbarToggler, Nav, NavItem } from "reactstrap";
import SocialLinks from "./socialLinks";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHmburgerAnimate, setIsHmburgerAnimate] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setIsHmburgerAnimate(!isHmburgerAnimate);
  };

  return (
    <>
      <NavbarToggler className="menu-wrapper" onClick={toggleSidebar}>
        <span
          className={
            isHmburgerAnimate ? "hamburger-menu animate" : "hamburger-menu"
          }
        ></span>
      </NavbarToggler>
      <div className={sidebarOpen ? "sideMenu show" : "sideMenu"}>
        <SocialLinks />
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="w-submenu">
            <span className="nav-link">About us</span>
            <ul className="submenu">
              <li className="nav-item w-submenu">
                <Link to="/">who are us</Link>
              </li>
              <li className="nav-item w-submenu">
                <Link to="/">Why us?</Link>
              </li>
            </ul>
          </NavItem>
          <NavItem className="w-submenu">
            <span className="nav-link">News</span>
            <ul className="submenu">
              <li className="nav-item w-submenu">
                <Link to="/news">News</Link>
              </li>
              <li className="nav-item w-submenu">
                <Link to="/">Events</Link>
              </li>
            </ul>
          </NavItem>
          <NavItem className="w-submenu">
            <span className="nav-link">Careers</span>
            <ul className="submenu">
              <li className="nav-item w-submenu">
                <Link to="/">Opportunities</Link>
              </li>
            </ul>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default SideMenu;
