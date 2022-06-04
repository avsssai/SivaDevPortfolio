// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { DarkModeProvider } from '../hooks/useDarkMode';
import GlobalStyles from '../styles/theme/GlobalStyles';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}

export default MyApp;
