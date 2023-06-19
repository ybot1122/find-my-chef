import React from "react";

import { FrontPageCover } from "../../components/frontPageCover/frontPageCover";
import { StartOnboardingCta } from "../../components/startOnboardingCta/startOnboardingCta";

const HomePage = () => {
  return (
    <section>
      <FrontPageCover id="front-page-cover" />
      <StartOnboardingCta />
    </section>
  );
};

export { HomePage };
