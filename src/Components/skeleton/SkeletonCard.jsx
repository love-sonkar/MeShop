import React from "react";
import AnimatedSkeleton from "./AnimatedSkeleton";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div className="skeleton__card">
      <div className="card__wrapper">
        <Skeleton type="image" />
        <Skeleton type="price" />
        <Skeleton type="rating" />
        <Skeleton type="des" />
      </div>
    </div>
  );
};

export default SkeletonCard;
