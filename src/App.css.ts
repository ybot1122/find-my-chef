import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const app = style({
  color: vars.colors.secondary,
  background: vars.colors.primary,
  fontFamily: vars.fontFamily,
  fontSize: "12px",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "16px",
    },
  },
});

export const title = style({
  textAlign: "center",
  margin: 0,
  padding: "50px",
});
