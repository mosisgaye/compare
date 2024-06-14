// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '@/config'; // Importer GTM_ID

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Autres balises head */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
