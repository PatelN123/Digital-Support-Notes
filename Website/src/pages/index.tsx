import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import HomeHero from '../components/homeHero'
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import {useColorMode} from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMessageSquareDetail, BiPaint } from "react-icons/bi";

function HomepageHeader() {
  const { isDarkTheme } = useColorMode();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <HomeHero />
        <h1 className={styles.heroTitle}>
          Open source documented notes for{" "}
          <span style={{ color: "var(--ifm-color-primary)" }}>
            Digital Support Services
          </span>{""}
          .
        </h1>
        <p className={styles.heroDescription}>
          All notes for <strong>Digital Support Services</strong>. Either start reading the notes, by clicking the button below, or contribute and help improve the notes!
        </p>
        <Link
          className={clsx(
            "button button--primary button--lg",
            styles.heroButton
          )}
          to="/docs/"
          style={{ marginRight: 10 }}
        >
          See the notes
        </Link>

        <a
          className={clsx(
            "button button--secondary button--lg",
            styles.heroButton
          )}
          href="https://github.com/pateln123/Digital-Support-Notes"
          target="_blank"
        >
          GitHub
        </a>

{         <br /> }
        <br />
{         <a
          href="https://www.producthunt.com/posts/digital-support-notes"
          target="_blank"
        >
          <img
            src={`https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=319078&theme=${
              isDarkTheme ? "dark" : "light"
            }`}
            alt="Notes for digital support services T-Level"
            style={{ width: 250, height: 54 }}
            width="250"
            height="54"
          />
        </a> }
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Simple",
      description:
        "These notes are simple and easy to understand for everyone, even contributing is super easy!",
      icon: <HiOutlineLightBulb fontSize={30} />,
    },
    {
      title: "Detailed",
      description:
        "All notes here are detailed and constantly being updated by contributors.",
      icon: <BiMessageSquareDetail fontSize={30} />,
    },
    {
      title: "Modern",
      description:
        "A simplistic modern design, making the site easy to understand and to contribute to.",
      icon: <BiPaint fontSize={30} />,
    },
  ];

  const renderFeatureCards = (features) => {
    return features.map((feature, key) => (
      <div key={key} className="col col--4">
        <div className={clsx("card", styles.featureCard)}>
          <div className={clsx("card__header", styles.featureCardTitle)}>
            <div className={styles.featureCardIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
          <div className={clsx("card__body", styles.featureCardBody)}>
            <p dangerouslySetInnerHTML={{ __html: feature.description }}></p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section>
        <div className="container">
          <div className="row">{renderFeatureCards(features)}</div>
        </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="All notes needed for Digital Support Services!"
    >
      <HomepageHeader />
      <br />
      <FeaturesSection />
      <br />
      <br />
    </Layout>
  );
}