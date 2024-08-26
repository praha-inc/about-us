const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // NOTE: VercelのサイトからCloudflareの独自ドメインにリダイレクトするための設定
      // TODO: Vercelのサイトを削除したらこの記述も削除する
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'praha.vercel.app',
          },
        ],
        destination: 'https://entrance.praha-inc.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextra(nextConfig);
