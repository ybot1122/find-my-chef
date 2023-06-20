import { style } from "@vanilla-extract/css";

export const row = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
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
  margin: "25px",
  border: "1px black dashed",
});

export const chefName = style({
  margin: 0,
  padding: 0,
});

export const photoGallery = style({});

export const photoGalleryImg = style({
  width: "100%",
  height: "320px",
  objectFit: "cover",

  "@media": {
    "screen and (min-width: 768px)": {
      width: "50%",
      height: "640px",
    },
  },
});
