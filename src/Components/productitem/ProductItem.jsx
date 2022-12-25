import React from "react";
import { DollarSign } from "react-feather";
import "./productitem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductItem = ({ details, CategorieTrue }) => {
  return (
    <>
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
            <p className="price">
              <DollarSign />
              {details.price}
            </p>
          </div>
          <div className="content">
            <p>{details.rating}</p>
            <p>{details.description}</p>
          </div>
          <div className="buybutton">
            <DollarSign />
            {details.price}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
