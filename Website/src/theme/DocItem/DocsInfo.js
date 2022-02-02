import React from "react";
import { useLocation } from "react-router-dom";
import { useActiveVersion } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ShareButton from "./ShareButton";

function DocsInfo({ docsPluginId, ...props }) {
  const { siteConfig } = useDocusaurusContext();

  const location = useLocation();
  const openDocIssueURL =
    "https://github.com/zowe/docs-site/issues/new?assignees=&labels=&template=---doc-error-report.md&title=Issue with docs.zowe.org" +
    `${location.pathname}`;
  const bugIconUrl = useBaseUrl("img/bug-icon.svg");

  return (
    <div className="margin-bottom--lg margin-top-md">
      <div className="row margin-left--none navbar__inner">
        <div className="user-options">
          {/* Open Doc Issue Button*/}
          <div className="margin-right--md display-flex">
            {openDocIssueURL && (
              <a
                href={openDocIssueURL}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="padding-right--sm noborder"
                  src={bugIconUrl}
                ></img>
                Open notes issue
              </a>
            )}
          </div>
          {/* Share Button*/}
          <div className="display-flex">
            <ShareButton title={props.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsInfo;