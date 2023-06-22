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

export const goToContainer = style({
  display: "flex",
});

export const goToPrevStep = style({
  width: "50%",
  padding: 0,
  margin: 0,
  textAlign: "left",
});

export const goToNextStep = style({
  width: "50%",
  padding: 0,
  margin: 0,
  textAlign: "right",
});
