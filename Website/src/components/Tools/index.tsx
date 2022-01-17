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
    name: <><img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" class="icon-inline" />Discord banner</>,
    url: 'https://backdropicons.notes.nayanpatel.net/',
    description: (
      <Translate id="playground.codesandbox.description">
        Discord optimised size for a banner, at 1500 × 600 pixels.
      </Translate>
    ),
  },
  {
    name: <><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" class="icon-inline" />Instagram Story</>,
    url: 'https://backdropicons.notes.nayanpatel.net/instagram-story',
    description: (
      <Translate id="playground.codesandbox.description">
        Instagram story optimised size for a banner, at 1500 × 600 pixels.
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
              <Translate id="playground.tryItButton">Use the tool!</Translate>
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
