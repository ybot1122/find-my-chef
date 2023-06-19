import React from "react";

import * as css from "./startOnboardingCta.css";

const CHEF_CTA = "Start Chef Onboarding";
const FOODIE_CTA = "Start Foodie Onboarding";

const StartOnboardingCta = () => {
  return (
    <div className={css.frontCover}>
      <div className={css.startOnboardingCard}>
        <img src="/chef.png" alt={CHEF_CTA} width={"100%"} />
        <button>{CHEF_CTA}</button>
      </div>

      <div className={css.startOnboardingCard}>
        <img src="/diner.png" alt={FOODIE_CTA} height="320px" />
        <button>{FOODIE_CTA}</button>
      </div>
    </div>
  );
};

export { StartOnboardingCta };
