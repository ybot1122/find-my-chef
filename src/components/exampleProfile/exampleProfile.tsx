import React from "react";

import * as css from "./exampleProfile.css";

const FAKE_BIO =
  "Hi, this is a short bio about myself. Here is where describe my type of cooking, what I look to post, and anything that will allow foodies to get to know me a bit better.";

const ExampleProfile = () => {
  return (
    <div className={css.profileContainer}>
      <div className={css.row}>
        <div className={css.column}>
          <h2 className={css.chefName}>Chef</h2>
          <h2 className={css.chefName}>WhyRobotWhy</h2>
          <p>{FAKE_BIO}</p>
        </div>
        <div className={css.column}>
          <img
            src="/MeProfessionalCropped.jpg"
            width="100%"
            height="320px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export { ExampleProfile };
