import React from "react";

import * as css from "./exampleProfile.css";
import classNames from "classnames";

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
          <img
            src="/MeProfessionalCropped.jpg"
            className={css.photoGalleryImg}
          />
        </div>
      </div>

      <div className={classNames(css.row, css.photoGallery)}>
        <img
          src="/foodFeed/beefnoodle.jpg"
          alt="Beef Noodle"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/eggrolls.jpg"
          alt="Egg Rolls"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/freshmuffins.gif"
          alt="Fresh Muffins from the oven"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/granola_bowl.jpg"
          alt="Bowl of Granola"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/granola.jpg"
          alt="World's best Granola"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/pancake-batter.jpg"
          alt="Pancake batter"
          className={css.photoGalleryImg}
        />
        <img
          src="/foodFeed/pancakes-in-pan.jpg"
          alt="Pancakes in the pan"
          className={css.photoGalleryImg}
        />
      </div>
    </div>
  );
};

export { ExampleProfile };
