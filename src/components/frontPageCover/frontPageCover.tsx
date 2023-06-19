import React from "react";

import * as css from "./frontPageCover.css";
import classNames from "classnames";

const FRONT_COVER_INTRO = "Introducing";
const FRONT_COVER_TEXT = "A New Platform";
const FRONT_COVER_TEXT2 = "for Home Chefs";
const FRONT_COVER_SUBTEXT =
  "Finally, a digital platform optimized for home chefs to share and collaborate.";

type FrontPageCoverProps = {
  id: string;
};

const FrontPageCover = ({ id }: FrontPageCoverProps) => {
  return (
    <div id={id} className={css.frontCover}>
      <img
        src="/pancakes.gif"
        alt={FRONT_COVER_SUBTEXT}
        className={css.frontCoverImage}
      />
      <div className={css.frontCoverScrim}>
        <div className={css.frontCoverText}>{FRONT_COVER_INTRO}</div>
        <div className={css.breakRow} />
        <div className={css.frontCoverText}>{FRONT_COVER_TEXT}</div>
        <div className={css.breakRow} />
        <div className={css.frontCoverText}>{FRONT_COVER_TEXT2}</div>
        <div className={css.breakRow} />
        <div className={css.spacer} />
        <div className={css.frontCoverSubtext}>{FRONT_COVER_SUBTEXT}</div>
      </div>
    </div>
  );
};

export { FrontPageCover };
