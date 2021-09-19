import SideMenu from "./sideMenu";
import SettingList from "./settingList";
import NotificationsList from "./notifications";
import SearchBox from "./searchBox";

import Logo from "../../images/logo_company.svg";
import Avatar from "../../images/icons/user/profile.png";

import { Navbar, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar color="main" className="fixed-top">
        <div className="container">
          <div className="nav-grid left">
            <SideMenu />
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="company" />
            </Link>
          </div>
          <ul className="nav-grid right">
            <li>
              <SearchBox />
            </li>
            <li className="dropdown">
              <NotificationsList />
            </li>
            <li>
              <Button color="transparent">
                <img src={Avatar} alt="user" className="avatar" />
                <span className="user-text">user name</span>
              </Button>
            </li>
            <li>
              <SettingList />
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
