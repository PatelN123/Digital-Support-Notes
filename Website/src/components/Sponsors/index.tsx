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

const Playgrounds = [
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
    name: <><img src="https://www.netlify.com/v3/img/components/logomark.png" class="icon-inline" />🌐 Netlify</>,
    url: 'https://netlify.com',
    description: (
      <Translate id="netlify.desc">
        With just seconds of setup, the Netlify platform provides teams everything to take modern web projects from the first preview to full production.
      </Translate>
    ),
  },
    {
    name: <><img src="https://cleavr.io/images/cleavr-logo.png" class="icon-inline" /🔪 Cleavr</>,
    url: 'https://cleavr.io',
    description: (
      <Translate id="cleavr.desc">
        Cleavr is your all-in-one server and deployment management platform for your PHP and NodeJS apps. Provision, deploy, monitor, backup, plus tons more!
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
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
