import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/new-dark-mode-logo.PNG" />
        <link rel="apple-touch-icon" href="/new-dark-mode-logo.PNG" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
