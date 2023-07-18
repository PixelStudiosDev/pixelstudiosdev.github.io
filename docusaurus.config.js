const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pixel Studios',
  tagline: 'Documentation for our plugins.',
  url: 'https://wiki.pixelstudios.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PixelStudiosDev', 
  projectName: 'pixelstudiosdev.github.io', 
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pixel Studios',
        hideOnScroll: true,
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'wool-wars/index',
            position: 'left',
            label: 'Wool Wars',
          },
          {
            type: 'doc',
            docId: 'guilds/index',
            position: 'left',
            label: 'Guilds',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://pixelstudios.dev/github">Pixel Studios</a>`,
        links: [
          {
            label: 'Discord',
            href: 'https://pixelstudios.dev/discord',
          },
          {
            label: 'SpigotMC',
            href: 'https://www.spigotmc.org/resources/authors/1173446/',
          },
          {
            label: 'Polymart',
            href: 'https://polymart.org/u/8600',
          },
          {
            label: 'GitHub',
            href: 'https://pixelstudios.dev/github',
          },
          {
            label: 'Donate',
            href: 'https://pixelstudios.dev/donate',
          },
        ],
      },
  
    
      algolia: {
        // The application ID provided by Algolia
        appId: 'IIJGX48KLL',

        // Public API key: it is safe to commit it
        apiKey: 'd9d893baf8341e852c41614cf24782d0',

        indexName: 'pixelstudios',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'
    }})
    
};

module.exports = config;
