import { useState } from "react";

import { Dropdown, DropdownToggle } from "reactstrap";

import { Link } from "react-router-dom";

import { BsGear } from "react-icons/bs";

const SettingList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle>
        <BsGear />
      </DropdownToggle>
      <ul className="dropdown-menu">
        <li>
          <h6 className="header">Language</h6>
          <Link to="" className="active w-check">
            English
          </Link>
          <Link to="/" className="w-check" data-content="اللغة العربية">
            اللغة العربية
          </Link>
        </li>
        <li>
          <h6 className="header">Font Size</h6>
          <div className="d-flex flex-row">
            <Link to="/" className="active w-changeColor lg-text">
              A
            </Link>
            <Link to="/" className="w-changeColor md-text">
              A
            </Link>
            <Link to="/" className="w-changeColor sm-text">
              A
            </Link>
          </div>
        </li>
        <li>
          <h6 className="header">Account</h6>
          <Link to="/" className="w-changeColor">
            Sign out
          </Link>
        </li>
      </ul>
    </Dropdown>
  );
};

export default SettingList;
