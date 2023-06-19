import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <body>
        <div id="front-cover" className={css.frontCover}>
          <div className={css.frontCoverText}>
              Introducing a New Platform for Home Chefs
          </div>
          <p className={css.frontCoverSubtext}>
            Finally, a digital platform optimized for home chefs to share and collaborate.
          </p>
        </div>
      </body>
    </div>
  );
};

export default App;
