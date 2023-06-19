import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const app = style({
  color: vars.colors.secondary,
  background: vars.colors.primary,
  fontFamily: vars.fontFamily,
});

export const title = style({});
