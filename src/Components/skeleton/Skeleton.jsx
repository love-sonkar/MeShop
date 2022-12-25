import React from "react";
import AnimatedSkeleton from "./AnimatedSkeleton";
import "./skeleton.css";

const Skeleton = ({ type }) => {
  const data = `skeleton ${type}`;
  return (
    <div className={data}>
      <AnimatedSkeleton />
    </div>
  );
};

export default Skeleton;
