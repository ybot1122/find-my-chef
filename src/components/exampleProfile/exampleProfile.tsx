import React from "react";

import * as css from "./exampleProfile.css";
import classNames from "classnames";
import { FoodPhoto } from "./foodPhoto/foodPhoto";

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
          <img src="/MeProfessionalCropped.jpg" className={css.profileImg} />
        </div>
      </div>

      <div className={classNames(css.row, css.photoGallery)}>
        <FoodPhoto src="/foodFeed/beefnoodle.jpg" alt="Beef Noodle" />

        <FoodPhoto src="/foodFeed/eggrolls.jpg" alt="Egg Rolls" />

        <FoodPhoto
          src="/foodFeed/freshmuffins.gif"
          alt="Fresh Muffins from the oven"
        />

        <FoodPhoto src="/foodFeed/granola_bowl.jpg" alt="Bowl of Granola" />

        <FoodPhoto src="/foodFeed/granola.jpg" alt="World's best Granola" />

        <FoodPhoto src="/foodFeed/pancake-batter.jpg" alt="Pancake batter" />

        <FoodPhoto
          src="/foodFeed/pancakes-in-pan.jpg"
          alt="Pancakes in the pan"
        />
      </div>
    </div>
  );
};

export { ExampleProfile };
