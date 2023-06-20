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
});

export const profileContainer = style({
  padding: "25px",
  margin: "25px",
  border: "1px black dashed",
});
