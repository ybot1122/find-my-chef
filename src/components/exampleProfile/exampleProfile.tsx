import React from "react";

import * as css from "./exampleProfile.css";

const ExampleProfile = () => {
  return (
    <div className={css.profileContainer}>
      <div className={css.row}>
        <div className={css.column}>Column 1</div>
        <div className={css.column}>Column 2</div>
      </div>
    </div>
  );
};

export { ExampleProfile };
