import React from "react";
import SearchBox from "../searchbox/SearchBox";
import { User } from "react-feather";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="">Logo</a>
      </div>
      <div className="avatar">
        <div className="circle flex centerAll">
          <a href="#">
            <User />
          </a>
        </div>
      </div>
      <div className="search">
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
