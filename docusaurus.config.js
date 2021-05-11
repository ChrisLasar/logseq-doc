/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Logseq Documentation',
  tagline: 'A privacy-first, open-source platform for knowledge sharing and management.',
  url: 'https://ChrisLasar.github.io',
  baseUrl: '/logseq-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ChrisLasar', // Usually your GitHub org/user name.
  projectName: 'logseq-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Logseq Docs',
      logo: {
        alt: 'Logseq Logo',
        src: 'img/logseq-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ChrisLasar/logseq-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/tutorial/intro',
            },
            {
              label: 'How-tos',
              to: '/docs/how-to/intro',
            },
            {
              label: 'Explanations',
              to: '/docs/explanation/intro',
            },
            {
              label: 'References',
              to: '/docs/reference/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord - Logseq project',
              href: 'https://discord.gg/KpN4eHY',
            },
            {
              label: 'Twitter - Logseq project',
              href: 'https://twitter.com/logseq',
            },
            {
              label: 'Trello Roadmap - Logseq project',
              href: 'https://trello.com/b/8txSM12G/roadmap',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub - Logseq project',
              href: 'https://github.com/logseq/logseq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Community of Logseq. Built with ❤️ and Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ChrisLasar/logseq-doc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ChrisLasar/logseq-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
