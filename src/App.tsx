import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <Outlet />
      <footer>(C) 2023 Toby Liu</footer>
    </div>
  );
};

export { App };
