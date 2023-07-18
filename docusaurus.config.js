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
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/PixelStudiosDev">Pixel Studios</a>`,
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
            href: 'https://github.com/PixelStudiosDev',
          },
          {
            label: 'Donate',
            href: 'https://pixelstudios.dev/donate',
          },
        ],
      },
    }),
};

module.exports = config;
