import React from "react";

import * as css from "./chefOnboardingStepTwo.css";
import classNames from "classnames";

type ConnectedStatus = 0 | 1 | -1; // 0 = not connected, 1 = connected, -1 = pending

const ChefOnboardingStepTwo = () => {
  const [facebookConnected, setFacebookConnected] =
    React.useState<ConnectedStatus>(0);
  const [instagramConnected, setInstagramConnected] =
    React.useState<ConnectedStatus>(0);
  const [tikTokConnected, setTikTokConnected] =
    React.useState<ConnectedStatus>(0);
  const [youtubeConnected, setYoutubeConnected] =
    React.useState<ConnectedStatus>(0);

  const onFacebookConnect = React.useCallback(() => {
    setFacebookConnected(-1);
    setTimeout(() => setFacebookConnected(1), 1000);
  }, [setFacebookConnected]);
  const onInstagramConnect = React.useCallback(() => {
    setInstagramConnected(-1);
    setTimeout(() => setInstagramConnected(1), 1000);
  }, [setInstagramConnected]);
  const onTikTokConnect = React.useCallback(() => {
    setTikTokConnected(-1);
    setTimeout(() => setTikTokConnected(1), 1000);
  }, [setTikTokConnected]);
  const onYoutubeConnect = React.useCallback(() => {
    setYoutubeConnected(-1);
    setTimeout(() => setYoutubeConnected(1), 1000);
  }, [setYoutubeConnected]);

  return (
    <div>
      <h2>Link Your Social Media</h2>

      <button
        className={classNames(css.connectButton, {
          [css.connectButtonActive]: facebookConnected === 0,
          [css.connectButtonComplete]: facebookConnected === 1,
        })}
        onClick={onFacebookConnect}
        disabled={facebookConnected !== 0}
      >
        {facebookConnected === 1
          ? "Facebook Connected!"
          : facebookConnected === 0
          ? "Connect your Facebook"
          : "pending"}
      </button>

      <button
        className={classNames(css.connectButton, {
          [css.connectButtonActive]: instagramConnected === 0,
          [css.connectButtonComplete]: instagramConnected === 1,
        })}
        onClick={onInstagramConnect}
        disabled={instagramConnected !== 0}
      >
        {instagramConnected === 1
          ? "Instagram Connected!"
          : instagramConnected === 0
          ? "Connect your Instagram"
          : "pending"}
      </button>

      <button
        className={classNames(css.connectButton, {
          [css.connectButtonActive]: tikTokConnected === 0,
          [css.connectButtonComplete]: tikTokConnected === 1,
        })}
        onClick={onTikTokConnect}
        disabled={tikTokConnected !== 0}
      >
        {tikTokConnected === 1
          ? "TikTok Connected!"
          : tikTokConnected === 0
          ? "Connect your TikTok"
          : "pending"}
      </button>

      <button
        className={classNames(css.connectButton, {
          [css.connectButtonActive]: youtubeConnected === 0,
          [css.connectButtonComplete]: youtubeConnected === 1,
        })}
        onClick={onYoutubeConnect}
        disabled={youtubeConnected !== 0}
      >
        {youtubeConnected === 1
          ? "Youtube Connected!"
          : youtubeConnected === 0
          ? "Connect your Youtube"
          : "pending"}
      </button>

      <div className={css.connectButton}>Any other Social Media?</div>
    </div>
  );
};

export { ChefOnboardingStepTwo };
