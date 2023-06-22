import React from "react";

import * as css from "./chefOnboardingStepTwo.css";

const ChefOnboardingStepTwo = () => {
  const onFacebookConnect = React.useCallback(
    () => setTimeout(() => console.log("fb"), 1000),
    []
  );
  const onInstagramConnect = React.useCallback(
    () => setTimeout(() => console.log("fb"), 1000),
    []
  );
  const onTikTokConnect = React.useCallback(
    () => setTimeout(() => console.log("fb"), 1000),
    []
  );
  const onYoutubeConnect = React.useCallback(
    () => setTimeout(() => console.log("fb"), 1000),
    []
  );

  return (
    <div>
      <h2>Link Your Social Media</h2>

      <div className={css.connectButton} onClick={onFacebookConnect}>
        Connect your Facebook
      </div>

      <div className={css.connectButton} onClick={onInstagramConnect}>
        Connect your Instagram
      </div>

      <div className={css.connectButton} onClick={onTikTokConnect}>
        Connect your TikTok
      </div>

      <div className={css.connectButton} onClick={onYoutubeConnect}>
        Connect your Youtube
      </div>

      <div className={css.connectButton}>Any other Social Media?</div>
    </div>
  );
};

export { ChefOnboardingStepTwo };
