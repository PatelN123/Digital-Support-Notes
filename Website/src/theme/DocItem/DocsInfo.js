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

  return (
    <div className="margin-bottom--lg margin-top-md">
      <div className="row margin-left--none navbar__inner">
        <div className="user-options">
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