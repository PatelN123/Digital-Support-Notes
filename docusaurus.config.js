const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Digital Support Notes',
  tagline: 'nayans notes',
  url: 'https://new-pateln123.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Nayan Notes',
  projectName: 'notes',
  trailingSlash: true,
  themeConfig: {
     announcementBar: {
       id: 'beta', // Any value that will identify this message.
       content:
         '🚧 <strong>This website is still under development.  </strong><a target="_blank" rel="noopener noreferrer" href="https://notes.nayanpatel.net"><strong>Stable version</strong></a>',
       backgroundColor: '#fafbfc', // Defaults to `#fff`.
       textColor: '#091E42', // Defaults to `#000`.
       isCloseable: true, // Defaults to `true`.
     },
    navbar: {
      title: 'Digital Support Notes',
      logo: {
        alt: 'nayan notes',
        src: 'img/logo.png',
        href: '/docs'
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Notes',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'lua',
        'toml',
      ],
    },
    zoomSelector: '.markdown :not(.authority-availability) > img',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nanos-world/docs/edit/master/',
          blogTitle: 'nanos world news!',
          blogDescription: 'All official news from nanos world!',
          blogSidebarTitle: 'nanos world news',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
            hashed: true,
            docsDir: 'docs',
            docsRouteBasePath: '/',
            indexDocs: true,
            indexBlog: false,
            indexPages: false,
            highlightSearchTermsOnTargetPage: false
        }
    ]
],
};
