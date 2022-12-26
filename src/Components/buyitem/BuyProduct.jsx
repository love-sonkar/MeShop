import React from "react";

const BuyProduct = ({ title, sethide }) => {
  console.log(title);
  return (
    <div>
      {title.title}
      <button onClick={() => sethide(false)}>click</button>
    </div>
  );
};

export default BuyProduct;
