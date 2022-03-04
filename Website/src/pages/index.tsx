import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import HomeHero from '../components/homeHero';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from "./index.module.css";
import 'animate.css';
import {useColorMode} from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
import AOS from 'aos';
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMessageSquareDetail, BiPaint } from "react-icons/bi";
import Head from '@docusaurus/Head';


if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener;
  AOS.init();
};

function HomepageHeader() {
  const { isDarkTheme } = useColorMode();

  return (
    <header className={clsx("hero animate__pulse", styles.heroBanner)}>
      <div className="container">
          <h1 className={(styles.heroTitle)} data-aos="zoom-y-out">
          Open source documented notes for{" "}
          <span className={clsx("gradienttitle")} style={{ color: "var(--ifm-color-primary);" }}>
            Digital Support Services
          </span>{""}
          .
        </h1>
        <p className={styles.heroDescription} data-aos="zoom-y-out" data-aos-delay="150">
          All notes for <strong>Digital Support Services</strong>. Either start reading the notes, by clicking the button below, or contribute and help improve the notes!
        </p>
        <span data-aos="zoom-y-out" data-aos-delay="300">
        <Link
          className={clsx(
            "button button--primary button--lg",
            styles.heroButton
          )}
          to="/docs/"
          style={{ marginRight: 10 }}
        >
        See the notes <span className="buttonIcon"><svg className="arrowhome" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" font-size="0.8em" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></span>
        </Link>

        <a
          className={clsx(
            "button button--secondary button--lg",
            styles.heroButton
          )}
          href="https://github.com/pateln123/Digital-Support-Notes"
          target="_blank"
        >
          <span className="buttonIcon"><svg className="githubhome" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" aria-hidden="true" focusable="false" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path></svg></span> GitHub
        </a>
        </span>

{         <br /> }
        <br />
        <span>
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
            data-aos="zoom-y-out" data-aos-delay="300"
          />
        </a> }
      </span>
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
      <div key={key} className="col col--4" data-aos="zoom-y-out" data-aos-delay="300">
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
      description="Digital Support Services (T Level) notes - An awesome textbook alternative that you can contribute to!"
    >
    <Head>
      <meta property="og:image" content="https://meta-image.vercel.app/Welcome%20to%20the%20**Digital%20Support%20Notes**%20!%20%F0%9F%8E%89.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnotes.nayanpatel.net%2Fsitelogo.svg&widths=300&heights=300" />
    </Head>
      <HomepageHeader />
      <br />
      <FeaturesSection />
      <br />
      <br />
    </Layout>
  );
}