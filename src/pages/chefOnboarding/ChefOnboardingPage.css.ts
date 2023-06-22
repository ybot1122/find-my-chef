import { style } from "@vanilla-extract/css";

export const onboardingSteps = style({
  textAlign: "center",
});

export const onboardingStep = style({
  display: "inline-block",
  margin: "0 15px",
});

export const activeStep = style({
  textDecoration: "underline",
});
