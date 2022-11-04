const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CubeCrafter Plugins',
  tagline: 'Documentation for our plugins.',
  url: 'https://cubecrafter.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CubeCrafter', 
  projectName: 'cubecrafter.github.io', 
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
          editUrl: 'https://github.com/cubecrafter/cubecrafter.github.io/edit/master/',
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
      image: 'img/logo.png',
      navbar: {
        title: 'CubeCrafter Plugins',
        hideOnScroll: true,
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
        copyright: `Copyright © ${new Date().getFullYear()} CubeCrafter Development`,
        links: [
          {
            label: 'Discord',
            href: 'https://discord.gg/ehjkwp5Fn4',
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
            href: 'https://github.com/cubecrafter',
          },
          {
            label: 'Donate',
            href: 'https://bit.ly/3NkPD7k',
          },
        ],
      },
    }),
};

module.exports = config;
