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
  border: "1px black solid",
  margin: "20px",
  height: "500px",
  overflow: "hidden",
});
