import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const App: FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <GoogleTagManager gtmId='GTM-M5B86HFP' />
      <Component {...pageProps} />
    </>
  );
}

export default App;
