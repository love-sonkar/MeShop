import React, { useState } from "react";
import { Search } from "react-feather";

const SearchBox = ({ search }) => {
  const [inputData, setInputData] = useState("");
  return (
    <div className="searchbox">
      <input
        type="type"
        placeholder="Search Anything..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <Search onClick={search} />
    </div>
  );
};

export default SearchBox;
