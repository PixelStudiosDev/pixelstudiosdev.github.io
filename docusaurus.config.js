// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CubeCrafter Plugins',
  tagline: 'Documentation for our plugins',
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
        title: 'CubeCrafter Plugins',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://discord.gg/ehjkwp5Fn4',
            label: 'Discord',
            position: 'left',
          },
          {
            href: 'https://polymart.org/u/8600',
            label: 'Polymart',
            position: 'left',
          },
          {
            href: 'https://github.com/CubeCrafter',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://www.paypal.com/donate/?hosted_button_id=VTKRK6DZJZAQ6',
            label: 'Donations',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
