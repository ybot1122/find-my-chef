import { style, keyframes } from "@vanilla-extract/css";

export const photoGalleryImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const photoGalleryImgContainer = style({
  position: "relative",
  display: "inline-block",
  width: "100%",
  height: "320px",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "50%",
      height: "420px",
    },
  },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.5 },
});

export const recipeCta = style({
  display: "none",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  selectors: {
    [`${photoGalleryImgContainer}:hover &`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export const recipeCtaScrim = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "black",
  display: "none",
  opacity: 0,
  animationName: fadeIn,
  animationDuration: "0.5s",
  cursor: "pointer",

  selectors: {
    [`${photoGalleryImgContainer}:hover &`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.5,
    },
  },
});
