/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'BusinessContext'
  | 'DigitalEnvironments'
  | 'Planning'
  | 'Data'
  | 'DiversityandInclusion'
  | 'Legislation'
  | 'Dataanalysis'
  | 'Faultanalysis'
  | 'Learning'
  | 'Tools'
  | 'Testing';

export type User = {
  title: string;
  description: string;
  preview: any;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your presentation
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite presentations!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  BusinessContext: {
    label: 'Business Context',
    description: 'Presentations relating to Business Context!',
    color: '#39ca30',
  },

  DigitalEnvironments: {
    label: 'Digital Environments',
    description: 'Presentations relating to Digital Environments!',
    color: '#dfd545',
  },

  Planning: {
    label: 'Planning',
    description:
      'Presentations relating to Planning!',
    color: '#a44fb7',
  },

  Data: {
    label: 'Data',
    description:
      'Presentations relating to Data!',
    color: '#127f82',
  },

  DivertistyandInclusion: {
    label: 'Diversity and Inclusion',
    description:
      'Presentations relating to Diversity and Inclusion!',
    color: '#fe6829',
  },

  Legislation: {
    label: 'Legislation',
    description:
      'Presentations relating to Legislation!',
    color: '#8c2f00',
  },

  Dataanalysis: {
    label: 'Data analysis',
    description: 'Presentations relating to Data analysis!',
    color: '#4267b2',
  },

  Faultanalysis: {
    label: 'Fault analysis',
    description:
      'Presentations relating to Fault analysis!',
    color: '#14cfc3',
  },

  Learning: {
    label: 'Learning',
    description:
      'Presentations relating to Learning!',
    color: '#ffcfc3',
  },

  Tools: {
    label: 'Tools',
    description:
      'Presentations relating to Tools!',
    color: '#d9ffc3',
  },

  
  Testing: {
    label: 'Testing',
    description:
      'Presentations relating to Testing!',
    color: '#d1c3ff',
  },
};


const Users: User[] = [
  {
    title: 'Staff training and awareness',
    description:
      'Helps staff understand what cyber attacks are, and how to keep safe',
    preview: require('./presentations/staa.png'),
    website: 'https://presentations.01.notes.nayanpatel.net/',
    source: 'https://github.com/PatelN123/Digital-Support-Notes/tree/main/Presentations/Staff%20training%20and%20awareness',
    tags: ['DigitalEnvironments', 'favorite'],
  },
  {
    title: 'Device Hardening',
    description:
      'A powerpoint on Device Hardening, and methods.',
    preview: require('./presentations/device-hardening.png'),
    website: 'http://cdn.nayan.gq/Hardening%20New.pptx',
    source: '',
    tags: ['DigitalEnvironments'],
  },
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
