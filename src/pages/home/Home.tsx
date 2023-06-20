import React from "react";

import { FrontPageCover } from "../../components/frontPageCover/frontPageCover";
import { StartOnboardingCta } from "../../components/startOnboardingCta/startOnboardingCta";
import { ExampleProfile } from "../../components/exampleProfile/exampleProfile";

const HomePage = () => {
  return (
    <section>
      <FrontPageCover id="front-page-cover" />
      <StartOnboardingCta />
      <ExampleProfile />
    </section>
  );
};

export { HomePage };
