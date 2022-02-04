import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from "react-router-dom";

function ShareButton(props) {
  const location = useLocation();
  const twitterShareURL =
    "https://twitter.com/share?url=https://notes.nayanpatel.net" +
    `${location.pathname}` +
    "&text=Check out this page on " +
    `${props.title}` +
    ": " +
    "&hashtags=didital, support, services, t, level, tlevel, opensource, textbook, notes";
  const linkedinShareURL =
    "http://www.linkedin.com/shareArticle?mini=true&url=https://notes.nayanpatel.net" +
    `${location.pathname}` +
    "&source=notes.nayanpatel.net";
  const facebookShareURL =
    "https://www.facebook.com/sharer/sharer.php?u=https://notes.nayanpatel.net" +
    `${location.pathname}`;
  const emailShareURL =
    "mailto:?subject=Shared Article | " +
    `${props.title}` +
    " | Digital Support Services T Level Notes " +
    "&body=Check out this notes page on " +
    `${props.title}` +
    ": https://notes.nayanpatel.net" +
    `${location.pathname}`;
  const shareIconUrl = useBaseUrl("img/share-icon.svg");

  const info = [
    {
      link: twitterShareURL,
      lightIcon: useBaseUrl("img/twitter-light-icon.svg"),
      name: "Twitter",
    },
    {
      link: linkedinShareURL,
      lightIcon: useBaseUrl("img/linkedin-light-icon.svg"),
      darkIcon: useBaseUrl("img/linkedin-dark-icon.svg"),
      name: "LinkedIn",
    },
    {
      link: facebookShareURL,
      lightIcon: useBaseUrl("img/facebook-light-icon.svg"),
      darkIcon: useBaseUrl("img/facebook-dark-icon.svg"),
      name: "Facebook",
    },
    {
      link: emailShareURL,
      lightIcon: useBaseUrl("img/email-light-icon.svg"),
      darkIcon: useBaseUrl("img/email-dark-icon.svg"),
      name: "Email",
    },
  ];

  return (
    <div className="dropdown dropdown--hoverable pointer">
      <a
        target="_blank"
        rel="noreferrer noopener"
        style={{ marginTop: "0.45rem" }}
      >
        <img
          className="margin-right--xs noborder"
          src={shareIconUrl}
          style={{ height: "16px", width: "18px", verticalAlign: "-0.125em" }}
        ></img>
      </a>
      <button
        className="button button--lg button--link padding-horiz--none pointer share-button"
        style={{ fontWeight: 400, fontFamily: "inherit", fontSize: "inherit" }}
      >
        Share
      </button>
      <ul className="dropdown__menu">
        {info.map((labels, idx) => (
          <li key={idx}>
            <a
              className="dropdown__link icons display-flex"
              href={labels.link}
              target="_blank"
            >
              <img
                className="lightTheme margin-right--sm noborder"
                alt="Share Icon"
                src={labels.lightIcon}
              ></img>
              {labels.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShareButton;