/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/pateln123/digital-support-notes/tree/main',
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
        "😲 We've reached over <strong>5.4K</strong> views for these notes over the last 90 days! 🙏",
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
              href: '/business/About-business',
            },
            {
              label: 'Data',
              href: '/data/About-data',
            },
            {
              label: 'Digital Environments',
              href: '/digital-environments/About-digital-environments',
            },
            {
              label: 'Planning',
              href: '/planning/About-planning',
            },
            {
              label: 'Diversity and Inclusion',
              href: '/divertisty-and-inclusion/About-divertisty-and-inclusion',
            },
            {
              label: 'Legislation',
              href: '/legislation/About-legislation',
            },
            {
              label: 'Careers',
              href: '/careers/About-careers',
            },
            {
              label: 'Communication',
              href: '/communication/About-communication',
            },
            {
              label: 'Culture',
              href: '/culture/About-culture',
            },
            {
              label: 'Digital Analysis',
              href: '/digital-analysis/About-digital-analysis',
            },
            {
              label: 'Fault Analysis',
              href: '/fault-analysis/About-fault-analysis',
            },
            {
              label: 'Learning',
              href: '/learning/About-learning',
            },
            {
              label: 'Security',
              href: '/security/About-security',
            },
            {
              label: 'Testing',
              href: '/testing/About-testing',
            },
            {
              label: 'Tools',
              href: '/tools/About-tools',
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
],
};
