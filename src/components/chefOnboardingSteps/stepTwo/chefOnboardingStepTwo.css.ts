import { style } from "@vanilla-extract/css";

export const connectButton = style({
  height: "100px",
  padding: "10px",
  ":hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});
