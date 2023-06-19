import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";

const FRONT_COVER_TEXT = "Introducing a New Platform for Home Chefs";
const FRONT_COVER_SUBTEXT =
  "Finally, a digital platform optimized for home chefs to share and collaborate.";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <body>
        <div id="front-cover" className={css.frontCover}>
          <div className={css.frontCoverText}>{FRONT_COVER_TEXT}</div>
          <p className={css.frontCoverSubtext}>{FRONT_COVER_SUBTEXT}</p>
        </div>
      </body>
    </div>
  );
};

export default App;
