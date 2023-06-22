import React, { useCallback } from "react";

import * as css from "./chefOnboardingStepOne.css";
import classNames from "classnames";

const CUISINES = [
  "American",
  "Mexican",
  "Chinese",
  "Italian",
  "Nigerian",
  "Japanese",
  "Korean",
  "Argentinian",
  "Spanish",
  "British",
  "Mediterranean",
  "Indian",
];
const CUISINES_PER_ROW = 4;
const ChefOnboardingStepOne = () => {
  const selected = React.useRef(new Set<number>());
  const [numSelected, setNumSelected] = React.useState(0);

  const onClick = useCallback(
    (name: number) => () => {
      if (selected.current.has(name)) {
        setNumSelected(numSelected - 1);
        selected.current.delete(name);
      } else {
        setNumSelected(numSelected + 1);
        selected.current.add(name);
      }
    },
    [numSelected, setNumSelected]
  );

  // generates the table for cuisine selection
  const cuisineTableContents = [];
  for (let i = 0; i < CUISINES.length; i += CUISINES_PER_ROW) {
    const row = [];
    for (let j = i; j < CUISINES.length && j < i + CUISINES_PER_ROW; j++) {
      row.push(
        <td>
          <button
            className={classNames(css.containerCell, {
              [css.activeCuisine]: selected.current.has(j),
            })}
            onClick={onClick(j)}
          >
            {CUISINES[j]}
          </button>
        </td>
      );
    }
    cuisineTableContents.push(<tr>{row}</tr>);
  }

  return (
    <div>
      <h2>Select Your Cuisines</h2>
      <table className={css.container}>
        <tbody>{cuisineTableContents}</tbody>
      </table>
    </div>
  );
};

export { ChefOnboardingStepOne };
