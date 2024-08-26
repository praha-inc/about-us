
import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => {
  return (
    <Html lang="ja">
      <Head >
        {/* NOTE: Vercelにホスティングしているサイトの所有権をGoogle Search Consoleに証明するための記述 */}
        <meta name="google-site-verification" content="5IkFk6t1_lJKoUI7Rofgi6RPwERUS0v6wzKU7eG9RT4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
