import { style } from "@vanilla-extract/css";

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

export const startOnboardingCard = style({
  position: "relative",
  width: "320px",
  margin: "20px",
  height: "500px",
  overflow: "hidden",
});

export const ctaButton = style({
  margin: "25px",
  padding: "5px",
  display: "inline-block",
  border: "1px black solid",
  textDecoration: "none",
  fontSize: "2em",
  ":hover": {
    fontWeight: "bold",
  },
});
