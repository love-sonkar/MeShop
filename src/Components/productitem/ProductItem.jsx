import React, { useState } from "react";
import "./productitem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BuyProduct from "../buyitem/BuyProduct";

const ProductItem = ({ details }) => {
  const [hide, sethide] = useState(false);
  const [ProductObj, setProductObj] = useState({});
  const BuyButton = (BuyProduct) => {
    const ObjProduct = {
      title: BuyProduct.title,
      thumbnail: BuyProduct.thumbnail,
      price: BuyProduct.price,
    };
    console.log(BuyProduct);
    setProductObj(ObjProduct);
    sethide(true);
  };
  return (
    <>
      {hide && <BuyProduct title={ProductObj} sethide={sethide} />}
      <div className="productitem">
        <div className="thumbnail">
          <LazyLoadImage
            src={details.thumbnail}
            alt={details.title}
            effect="blur"
          />
        </div>
        <div className="content__wrapper">
          <div className="titleprice">
            <h1>{details.title}</h1>
            <p className="price flex">{details.price} Rs</p>
          </div>
          <div className="content">
            <p>{details.rating}</p>
            <p>{details.description}</p>
          </div>
          <div onClick={() => BuyButton(details)} className="buybutton">
            Buy
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
