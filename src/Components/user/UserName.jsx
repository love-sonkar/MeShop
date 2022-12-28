import React, { useState } from "react";
import { ArrowLeftCircle, UserPlus } from "react-feather";
import Usersvg from "../../assets/loginuser.svg";
import "./user.css";

const UserName = ({ setuser }) => {
  const [inputval, setinputval] = useState("");

  return (
    <div className="user__container ">
      <div className="user__box">
        <div className="clip__path"></div>
        <span className="arrow__left">
          <ArrowLeftCircle />
        </span>
        <div className="controlAllcontent">
          <div className="user__profile">
            <h1 className="heading">Login</h1>
            <img src={Usersvg} alt="user icon" />
          </div>
          <div className="user__data">
            <div className="input__box">
              <div className="input__conteiner flex">
                <span className="userSvg">
                  <UserPlus />
                </span>
                <input
                  type="text"
                  value={inputval}
                  onChange={(e) => setinputval(e.target.value)}
                />
              </div>
            </div>
            <button onClick={() => setuser(inputval)}>Submit</button>
          </div>
          <div className="sing__up">
            <p className="sing_up_para">don't have a account </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
