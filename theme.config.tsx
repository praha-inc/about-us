import { useConfig } from 'nextra-theme-docs';

import type { DocsThemeConfig } from 'nextra-theme-docs';

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
    content: null,
  },
  editLink: {
    text: 'GitHubでこのページの修正を提案する',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | ${siteTitle}`,
    };
  },
  head: function Head() {
    const config = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content="https://entrance.praha-inc.com/"
        />
        <meta
          property="og:title"
          content={`${config.title} | ${siteTitle}`}
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/production-os-assets/assets/3e2414da-29eb-4a09-a665-b35ce4ecb451"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          name="description"
          content="株式会社PrAhaのEntrance Bookです。"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://storage.googleapis.com/production-os-assets/assets/20ca8184-a65b-42b5-8571-78324aef53bd"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://storage.googleapis.com/production-os-assets/assets/20ca8184-a65b-42b5-8571-78324aef53bd"
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:image"
          content="https://storage.googleapis.com/production-os-assets/assets/3e2414da-29eb-4a09-a665-b35ce4ecb451"
        />
      </>
    );
  },
} satisfies DocsThemeConfig;
