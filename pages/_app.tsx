import '../styles/global.css';
import { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="all" />
        <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
