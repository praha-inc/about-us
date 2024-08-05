import type { DocsThemeConfig } from 'nextra-theme-docs'

const siteTitle = 'PrAha Entrance Book';

export default {
  logo: <strong>{siteTitle}</strong>,
  project: {
    link: 'https://github.com/praha-inc/about-us',
  },
  docsRepositoryBase: 'https://github.com/praha-inc/about-us/tree/main',
  footer: {
    text: '©2020 PrAha Inc. All Rights Reserved',
  },
  feedback: {
    content: null
  },
  editLink: {
    text: 'GitHubでこのページの修正を提案する'
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | ${siteTitle}`,
    };
  },
} satisfies DocsThemeConfig;
