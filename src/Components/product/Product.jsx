import React, { useEffect, useState } from "react";
import { CategorieApi } from "../categorie/CategorieApi";
import CategorieBadge from "../categorie/CategorieBadge";
import ProductItem from "../productitem/ProductItem";
import SkeletonCard from "../skeleton/SkeletonCard";
import axios from "axios";

import "./product.css";

const Product = () => {
  const [Product, setProduct] = useState(null);
  const [categorieItem, setcategorieItem] = useState(null);

  const data = () => {
    axios
      .get("https://dummyjson.com/products?limit=10", { headers: "no-core" })
      .then((res) => setProduct(res.data.products))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    return data();
  }, []);
  useEffect(() => {
    const categorieFunc = () => {
      fetch(`https://dummyjson.com/products/category/${categorieItem}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.products));
    };
    {
      categorieItem && categorieFunc();
    }
  }, [categorieItem]);

  const categorieClick = (thisProduct) => {
    setcategorieItem(thisProduct);
    console.log(thisProduct);
  };
  console.log(Product);

  const mapArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="categorie__wrapper">
        {CategorieApi &&
          CategorieApi.map((item) => (
            <CategorieBadge
              key={item}
              CategorieName={item}
              categorieClick={categorieClick}
            />
          ))}
      </div>
      <div className="products">
        {Product
          ? Product.map((item) => <ProductItem key={item.id} details={item} />)
          : mapArray.map((item) => {
              return <SkeletonCard key={item} />;
            })}
      </div>
    </>
  );
};

export default Product;
