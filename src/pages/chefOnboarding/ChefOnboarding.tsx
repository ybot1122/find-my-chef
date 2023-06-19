import React from "react";
import { themeClass } from "../../theme.css";
import * as css from "../../App.css";
import classNames from "classnames";

const ChefOnboarding = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <body>
        <h2>Chef Onboarding!</h2>
      </body>
    </div>
  );
};

export { ChefOnboarding };
