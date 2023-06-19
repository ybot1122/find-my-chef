import React from "react";

import * as css from "./startOnboardingCta.css";
import { Link } from "react-router-dom";

const CHEF_CTA = "Start Chef Onboarding";
const FOODIE_CTA = "Start Foodie Onboarding";

const StartOnboardingCta = () => {
  return (
    <div className={css.frontCover}>
      <div className={css.startOnboardingCard}>
        <img src="/chef.png" alt={CHEF_CTA} width={"100%"} />
        <Link to="/chefOnboarding">{CHEF_CTA}</Link>
      </div>

      <div className={css.startOnboardingCard}>
        <img src="/diner.png" alt={FOODIE_CTA} height="320px" />
        <Link to="/foodieOnboarding">{FOODIE_CTA}</Link>
      </div>
    </div>
  );
};

export { StartOnboardingCta };
