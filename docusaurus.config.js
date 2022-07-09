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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CubeCrafter', // Usually your GitHub org/user name.
  projectName: 'cubecrafter.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/CubeCrafter/cubecrafter.github.io/tree/master/packages/create-docusaurus/templates/shared/',
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
