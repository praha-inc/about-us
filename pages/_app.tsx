import type { AppProps } from 'next/app';
import { GoogleTagManager } from '@next/third-parties/google';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleTagManager gtmId='GTM-M5B86HFP' />
      <Component {...pageProps} />
    </>
  );
}

export default App;
