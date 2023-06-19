import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const frontCover = style({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: 0,
  padding: "50px 0",
});

export const frontCoverImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

export const frontCoverScrim = style({
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.5)",
  padding: "25px",
});

export const frontCoverText = style({
  maxWidth: "768px",
  fontSize: "4em",
  zIndex: 2,
});

export const frontCoverSubtext = style({
  maxWidth: "768px",
  fontSize: "2em",
  zIndex: 2,
});

export const breakRow = style({
  flexBasis: "100%",
  height: 0,
  zIndex: 2,
});

export const spacer = style({
  flexBasis: "100%",
  height: "50px",
  zIndex: 2,
});
