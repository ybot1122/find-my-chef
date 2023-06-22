import { style } from "@vanilla-extract/css";

export const container = style({
  border: "1px black solid",
});

export const containerCell = style({
  width: "150px",
  height: "100px",
  padding: "10px",
  ":hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});

export const activeCuisine = style({
  color: "green",
  fontWeight: "bold",
});
