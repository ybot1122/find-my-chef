import React from "react";

import * as css from "./foodPhoto.css";

type FoodPhotoProps = {
  src: string;
  alt: string;
};

const FoodPhoto = ({ src, alt }: FoodPhotoProps) => {
  return (
    <div className={css.photoGalleryImgContainer}>
      <div className={css.recipeCtaScrim} />
      <div className={css.recipeCta}>Click Here for Recipe</div>
      <img src={src} alt={alt} className={css.photoGalleryImg} />
    </div>
  );
};

export { FoodPhoto };
