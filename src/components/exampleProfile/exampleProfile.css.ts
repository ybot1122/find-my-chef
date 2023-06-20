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