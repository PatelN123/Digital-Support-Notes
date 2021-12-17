const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Digital Support Services Notes',
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
      title: 'Digital Support Services Notes',
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
          href: 'https://github.com/Nayan-Web/Digital-Support-Notes',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sites',
          items: [
            {
              label: 'Notes',
              to: 'docs',
            },
            {
              label: 'Main Site',
              href: 'https://nayanpatel.net',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
              </a>
            `,
            },
          ],
        },
        {
          title: 'Code of Conduct',
          items: [
            {
              href: "https://github.com/Nayan-Web/Digital-Support-Notes/blob/main/Code%20of%20Conduct.md",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nayan Web`,
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
          blogTitle: 'Nayan Notes Blog!',
          blogDescription: 'All official news from Nayan notes!',
          blogSidebarTitle: 'Nayan Notes news',
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
            indexPages: true,
            highlightSearchTermsOnTargetPage: false
        }
    ]
],
};
