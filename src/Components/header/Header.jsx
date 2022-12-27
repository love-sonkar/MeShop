import React, { useContext } from "react";
import SearchBox from "../searchbox/SearchBox";
import { User } from "react-feather";
import "./header.css";
import { UserUpdate } from "../../App";

const Header = () => {
  const username = useContext(UserUpdate);

  return (
    <div className="header">
      <div className="user__value">
        <p>{username}</p>
      </div>
      <div className="avatar">
        <div className="circle flex centerAll">
          <a>
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
