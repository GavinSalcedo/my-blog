import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: any
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return <>
   <Navbar />
    {
      Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )
    } 
  </>
}

export default MyApp
