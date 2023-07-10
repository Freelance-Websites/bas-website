import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="overflow-scroll overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};