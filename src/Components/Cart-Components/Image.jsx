import React from "react";

const Image = ({ src, alt = "image", height = "auto", width = "auto" }) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

export default Image;
