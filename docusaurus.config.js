// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const linebreakPlugins = require("./src/plugins/linebreakPlugin");
const pageRef = require('./src/plugins/pageRef');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Digital Support Services Notes',
    tagline: 'All notes for Digital Support Services! By Nayan',
    url: 'https://newnotes.nayanpatel.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'PatelN123',
    projectName: 'Notes',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/PatelN123/Nayan-Notes-New-main/edit/main/',
                    path: 'notes',
                    routeBasePath: '/notes',
                    beforeDefaultRemarkPlugins: [
                        pageRef,
                    ],
                    remarkPlugins: [
                        linebreakPlugins,
                    ]
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('inter-ui/inter.css'),
                        require.resolve('./src/css/custom.css')
                    ],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Digital Support Services Notes',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo-small.png',
                    href: '/notes'
                },
                items: [
                    {
                        to: 'notes',
                        label: 'Notes',
                        position: 'left',
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            announcementBar: {
                id: 'announcementBar-2', // Increment on change
                content: `🚧 This website is still under development <a target="_blank" rel="noopener noreferrer" href="https://notes.nayanpatel.net">Stable Version</a>`,
              },
        }),

    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                docsDir: 'notes',
                docsRouteBasePath: '/',
                indexDocs: true,
                indexBlog: false,
                indexPages: false,
                highlightSearchTermsOnTargetPage: false
            }
        ]
    ]
};

module.exports = config;
