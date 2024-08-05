import type { DocsThemeConfig } from 'nextra-theme-docs'

export default {
  logo: <strong>PrAha</strong>,
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
} satisfies DocsThemeConfig;
