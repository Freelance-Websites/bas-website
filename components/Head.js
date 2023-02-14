import Head from 'next/head';

const CustomHead = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} • BA AA` : 'BA AA';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <title>{title}</title>
      
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
};

export default CustomHead;