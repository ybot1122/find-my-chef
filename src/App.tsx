import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>FindMyChef</header>
    </div>
  );
};

export default App;
