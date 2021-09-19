import { useState } from "react";

import { Dropdown, DropdownToggle } from "reactstrap";

import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotificationsList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle>
        <BsBell />
      </DropdownToggle>
      <div className="dropdown-menu width-320 notification-list">
        <h6 className="header">Recent Notifications</h6>
        <ul className="mx-height-190">
          <li>
            <p>
              You have an upcoming appointment today!
              <span className="second-color"> Check-in Now</span>
            </p>
          </li>
          <li>
            <p>Rate your last service appointment</p>
          </li>
          <li>
            <p>Your payment request has been approved</p>
          </li>
        </ul>
        <h6 className="header center w-top-border">
          <Link to="" className="second-color w-arrow">
            All Notifications
          </Link>
        </h6>
      </div>
    </Dropdown>
  );
};

export default NotificationsList;
