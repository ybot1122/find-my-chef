import React from "react";

import * as css from "./chefOnboardingStepOne.css";

const ChefOnboardingStepOne = () => {
  return (
    <div>
      <h2>Select Your Cuisines</h2>

      <table className={css.container}>
        <tbody>
          <tr>
            <td className={css.containerCell}>American</td>
            <td className={css.containerCell}>Mexican</td>
            <td className={css.containerCell}>Chinese</td>
            <td className={css.containerCell}>Italian</td>
          </tr>
          <tr>
            <td className={css.containerCell}>Nigerian</td>
            <td className={css.containerCell}>Japanese</td>
            <td className={css.containerCell}>Korean</td>
            <td className={css.containerCell}>Argentinian</td>
          </tr>
          <tr>
            <td className={css.containerCell}>Spanish</td>
            <td className={css.containerCell}>British</td>
            <td className={css.containerCell}>Mediterranean</td>
            <td className={css.containerCell}>Indian</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { ChefOnboardingStepOne };
