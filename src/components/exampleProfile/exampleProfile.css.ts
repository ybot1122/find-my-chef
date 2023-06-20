import { style, keyframes } from "@vanilla-extract/css";

export const row = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  margin: "auto auto",
});

export const column = style({
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flex: 1,
  padding: "5px",
});

export const profileContainer = style({
  padding: "5px",
  margin: "auto",
  maxWidth: "1024px",
});

export const chefName = style({
  margin: 0,
  padding: 0,
});

export const photoGallery = style({});

export const profileImg = style({
  width: "100%",
  height: "240px",
  borderRadius: "100%",
  objectFit: "cover",
  "@media": {
    "screen and (min-width: 768px)": {
      height: "420px",
    },
  },
});

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
