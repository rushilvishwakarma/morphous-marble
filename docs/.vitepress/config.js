import { defineConfig } from 'vitepress';

export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: './theme/custom.css' }],
    ['link', { rel: 'icon', href: 'https://svgshare.com/i/17FG.svg' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Team', link: '/team' },
    ],

    logo: {
      light: 'https://i.ibb.co/6v8DS91/morphous-logo-prototype-light.png',
      dark: 'https://i.ibb.co/rkHDpYN/morphous-logo-prototype-dark.png',
      alt: 'Morphous Logo'
    },

    siteTitle: "Morphous",
    description: "A Practical Approach for Modding Android",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyperglass' },
      { icon: 'discord', link: 'https://discord.gg/TnPumBTqvv' }
    ],

    editLink: {
      pattern: 'https://github.com/hyperglass/morphous-marble/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: 'Guides released under the MIT License.',
    },

  },

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "/.vitepress/theme/custom.css";`
        },
      },
    },
  },
  title: 'Morphous',
  ignoreDeadLinks: true,
  base: '/morphous/',
});
