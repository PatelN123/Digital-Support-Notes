/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const Sponsors = [
  {
    name: <><img src="https://img.stackshare.io/service/12547/OIhIQ6XR_400x400.jpg" class="icon-inline" />🪐 Instatus</>,
    url: 'https://instatus.com/',
    description: (
      <Translate id="instatus.desc">
        Get a beautiful status page in 10 seconds, without paying thousands of dollars!
      </Translate>
    ),
  },
  {
    name: <><img src="https://assets.vercel.com/image/upload/q_auto/front/zeit/og.png" class="icon-inline" />▲ Vercel</>,
    url: 'https://vercel.com',
    description: (
      <Translate id="vercel.desc">
        Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.
      </Translate>
    ),
  },
    {
    name: <><img src="https://cleavr.io/images/cleavr-logo.png" class="icon-inline" />🔪 Cleavr</>,
    url: 'https://cleavr.io',
    description: (
      <Translate id="cleavr.desc">
        Cleavr is your all-in-one server and deployment management platform for your PHP and NodeJS apps. Provision, deploy, monitor, backup, plus tons more!
      </Translate>
    ),
  },
  {
    name: <><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/r5ayjzfa7lhihesgh407" class="icon-inline" />💥 Koyeb</>,
    url: 'https://koyeb.com',
    description: (
      <Translate id="koyeb.desc">
        Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.
      </Translate>
    ),
  },
  {
   name: <><img src="https://www.zoho.com/flow/assets/app_logos/canny_logo.jpeg" class="icon-inline" />Canny</>,
   url: 'https://canny.io/',
   description: (
       "Canny helps you collect and organize feature requests to better understand customer needs and prioritize your roadmap."
    ),
  },
  {
    name: <><img src="https://www.freelogovectors.net/wp-content/uploads/2020/11/algolia_logo.png" class="icon-inline" />🔍 Algolia</>,
    url: 'https://algolia.com',
    description: (
      <Translate id="algolia.desc">
        Algolia empowers Builders with the Search and Recommendation services they need to build world-class experiences.
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function PlaygroundCard({name, image, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
          </Link>
        </div>
        <div className="card__body">
          <center><h3>{name}</h3></center>
          <center><p>{description}</p></center>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="playground.tryItButton">Take a look 👀</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Sponsors.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
