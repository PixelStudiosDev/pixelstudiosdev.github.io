/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'home',
    },
    {
      type: 'category',
      label: 'Wool Wars',
      link: {
        type: 'doc',
        id: 'wool-wars/index',
      },
      items: [
        {
          type: 'doc',
          id: 'wool-wars/installation',
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            {
              type: 'doc',
              id: 'wool-wars/configuration/creating-an-arena',
            },  
          ],
        },
        {
          type: 'doc',
          id: 'wool-wars/commands-and-permissions',
        },
        {
          type: 'doc',
          id: 'wool-wars/frequently-asked-questions',
        },
        {
          type: 'doc',
          id: 'wool-wars/default-config-files',
        },
        {
          type: 'category',
          label: 'Placeholders',
          items: [
            {
              type: 'doc',
              id: 'wool-wars/placeholders/internal-placeholders',
            },
            {
              type: 'doc',
              id: 'wool-wars/placeholders/placeholderapi',
            },
          ],
        },
        {
          type: 'category',
          label: 'Developer API',
          items: [
            {
              type: 'doc',
              id: 'wool-wars/developer-api',
            },
            {
              type: 'link',
              label: 'Events',
              href: 'https://github.com/CubeCrafter/WoolWars/tree/master/src/main/java/me/cubecrafter/woolwars/api/events',
            },
            {
              type: 'link',
              label: 'Methods',
              href: 'https://github.com/CubeCrafter/WoolWars/blob/master/src/main/java/me/cubecrafter/woolwars/api/WoolWarsAPI.java',
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
