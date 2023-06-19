import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";
import { FrontPageCover } from "./components/frontPageCover/frontPageCover";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <body>
        <FrontPageCover id="Introducing-A-New-Platform" />
      </body>
    </div>
  );
};

export default App;
