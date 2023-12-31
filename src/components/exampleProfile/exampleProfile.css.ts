import { style } from "@vanilla-extract/css";

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
