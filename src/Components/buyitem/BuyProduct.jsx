import React, { useState } from "react";
import "./buyproduct.css";
import { Minus, Plus, X } from "react-feather";
const BuyProduct = ({ title, sethide }) => {
  const [BuyPrice, setBuyPrice] = useState(title.price);
  const [counter, setcounter] = useState(1);

  const Add = () => {
    setBuyPrice(title.price + BuyPrice);
    setcounter(counter + 1);
  };

  const Delete = () => {
    setcounter(counter - 1);
    setBuyPrice(BuyPrice - title.price);
  };
  return (
    <div className="buy__container">
      <div className="buyproduct">
        <div className="imgBox">
          <img src={title.thumbnail} alt="" />
        </div>
        <div className="content__buy">
          <h1>{title.title}</h1>
        </div>
        <div className="counter__function flex ">
          <div>
            <p>Product Item</p>
          </div>
          <div className="flex ">
            {counter != 1 && (
              <button onClick={Delete} className="minus">
                <Minus />
              </button>
            )}
            <span className={`show__price ${counter === 1 ? "br" : ""}`}>
              <p className="flex centerAll">{counter} </p>
            </span>
            <button onClick={Add} className="plus">
              <Plus />
            </button>
          </div>
        </div>
        <div className="btnProductBuy">
          <button
            onClick={() =>
              alert(
                "this feature will be added soon " +
                  "This is your Total Price " +
                  BuyPrice
              )
            }
          >
            {BuyPrice} Rs
          </button>
        </div>
        <div className="closeButton">
          <span onClick={() => sethide(false)}>
            <X />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
