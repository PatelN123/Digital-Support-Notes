/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [
    pageRef,
  ],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  scripts: [
    {
      src: "https://status.notes.nayanpatel.net/widget/script.js",
    },
  ],
  title: 'Digital Support Services Notes',
  tagline: 'An awesome textbook alternative, that you can contribute to! 🚀',
  url: 'https://notes.nayanpatel.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'Digital Support Services notes', // Usually your GitHub org/user name.
  projectName: 'Digital Support Services notes', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    umami: {
      websiteid: "67a6f4d2-2b85-4678-8972-d5d43a6216ab",
      src: "https://analytics.notes.nayanpatel.net/umami.js",
    },
    clarity: {
      ID: "9hfzg8mbot",
    },
    metadatas: [
      {
          name: 'og:image',
          content: 'https://meta-image.vercel.app/Digital%20Support%20Services%20Notes!.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnotes.nayanpatel.net%2Fsitelogo.svg&widths=250&heights=250'
      },
      {
          name: 'theme-color',
          content: '#5fa0ff'
      },
      {
          name: 'twitter:card',
          content: 'summary'
      },
  ],
    algolia: {
      appId: 'T2T780TWHU',
      apiKey: '99a14a43d86b4d0cb8f8608e65b3edaf',
      indexName: 'notes-nayanpatel',
      contextualSearch: true,
    },
    announcementBar: {
      id: 'beta', // Any value that will identify this message.
      content:
        "😲 We've reached over <strong>20K+</strong> views for these notes! 🙏",
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Digital Support Services Notes',
      hideOnScroll: false,
      logo: {
        alt: 'Digital Support Services notes',
        src: '/img/logonobg.png',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '(^/docs)',
        },
        {
          type: 'dropdown',
          label: 'Notes',
          position: 'left',
          items: [
            {
              label: 'Business Context',
              to: '/business/About-business',
              activeBasePath: '/business',
            },
            {
              label: 'Data',
              to: '/data/About-data',
              activeBasePath: '/data',
            },
            {
              label: 'Digital Environments',
              to: '/digital-environments/About-digital-environments',
              activeBasePath: '/digital-environments',
            },
            {
              label: 'Planning',
              to: '/planning/About-planning',
              activeBasePath: '/planning',
            },
            {
              label: 'Diversity and Inclusion',
              to: '/divertisty-and-inclusion/About-divertisty-and-inclusion',
              activeBasePath: '/divertisty-and-inclusion',
            },
            {
              label: 'Legislation',
              to: '/legislation/About-legislation',
              activeBasePath: '/legislation',
            },
            {
              label: 'Careers',
              to: '/careers/About-careers',
              activeBasePath: '/careers',
            },
            {
              label: 'Communication',
              to: '/communication/About-communication',
              activeBasePath: '/communication',
            },
            {
              label: 'Culture',
              to: '/culture/About-culture',
              activeBasePath: '/culture',
            },
            {
              label: 'Digital Analysis',
              to: '/digital-analysis/About-digital-analysis',
              activeBasePath: '/digital-analysis',
            },
            {
              label: 'Fault Analysis',
              to: '/fault-analysis/About-fault-analysis',
              activeBasePath: '/fault-analysis',
            },
            {
              label: 'Learning',
              to: '/learning/About-learning',
              activeBasePath: '/learning',
            },
            {
              label: 'Security',
              to: '/security/About-security',
              activeBasePath: '/security',
            },
            {
              label: 'Testing',
              to: '/testing/About-testing',
              activeBasePath: '/testing',
            },
            {
              label: 'Tools',
              to: '/tools/About-tools',
              activeBasePath: '/tools',
            },
            {
              label: 'ESP',
              to: '/esp/About-esp',
              activeBasePath: '/esp',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Tools',
          position: 'left',
          items: [
            {
              label: 'Backdrop Icons',
              to: '/backdropicons',
              activeBasePath: '/backdropicons',
            },
            {
              label:  'Analytics',
              to: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes',
            },
          ],
        },
        {
          to: '/feature-requests',
          label: 'Feature Request →',
          position: 'left',
          className: 'feature-req',
        },
        {
          href: '#',
          position: 'right',
          label: "What's new?",
          'data': 'data-canny-changelog',
          'data-canny-changelog': 'true',
        },
        {
          href: 'https://github.com/Nayan-Web/Digital-Support-Notes',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.producthunt.com/posts/digital-support-notes',
          position: 'right',
          className: 'header-prod-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
          ...pageOptions,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-umami',
      {
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      },
    ],
    require('./src/featureRequests/FeatureRequestsPlugin'),
    tailwindPlugin,
    webpackPlugin,
    [
      'docusaurus-plugin-sass',
      {
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/business',
        routeBasePath: 'business',
        id: 'business',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/data',
        routeBasePath: 'data',
        id: 'data',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/digital-environments',
        routeBasePath: 'digital-environments',
        id: 'digital-environments',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/planning',
        routeBasePath: 'planning',
        id: 'planning',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/divertisty-and-inclusion',
        routeBasePath: 'divertisty-and-inclusion',
        id: 'divertisty-and-inclusion',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/legislation',
        routeBasePath: 'legislation',
        id: 'legislation',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/careers',
        routeBasePath: 'careers',
        id: 'careers',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/communication',
        routeBasePath: 'communication',
        id: 'communication',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/culture',
        routeBasePath: 'culture',
        id: 'culture',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/digital-analysis',
        routeBasePath: 'digital-analysis',
        id: 'digital-analysis',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/fault-analysis',
        routeBasePath: 'fault-analysis',
        id: 'fault-analysis',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/learning',
        routeBasePath: 'learning',
        id: 'learning',
        sidebarPath: require.resolve('./sidebars/autogen.js'),
        ...pageOptions,
      },
    ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/security',
      routeBasePath: 'security',
      id: 'security',
      sidebarPath: require.resolve('./sidebars/autogen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/testing',
      routeBasePath: 'testing',
      id: 'testing',
      sidebarPath: require.resolve('./sidebars/autogen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/tools',
      routeBasePath: 'tools',
      id: 'tools',
      sidebarPath: require.resolve('./sidebars/autogen.js'),
      ...pageOptions,
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/esp',
      routeBasePath: 'esp',
      id: 'esp',
      sidebarPath: require.resolve('./sidebars/autogen.js'),
      ...pageOptions,
    },
  ],
],
};
