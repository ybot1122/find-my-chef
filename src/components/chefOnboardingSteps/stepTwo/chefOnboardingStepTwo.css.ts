import { style } from "@vanilla-extract/css";

export const connectButton = style({
  height: "100px",
  padding: "10px",
});

export const connectButtonComplete = style({
  color: "green",
  fontWeight: "bold",
});

export const connectButtonActive = style({
  ":hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});
