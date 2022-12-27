import React, { useState } from "react";
import "./user.css";

const UserName = ({ setuser }) => {
  const [inputval, setinputval] = useState("");

  return (
    <div className="user__container flex centerAll">
      <p className="user__title">enter your name</p>
      <div className="input__content flex centerAll">
        <input
          type="text"
          value={inputval}
          onChange={(e) => setinputval(e.target.value)}
        />
        <button onClick={() => setuser(inputval)}>Submit</button>
      </div>
    </div>
  );
};

export default UserName;
