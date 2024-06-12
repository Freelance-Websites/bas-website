import Head from 'next/head';

const CustomHead = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} • BAS` : 'BAS';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Estudio de arquitectura con base en la Ciudad de Buenos Aires que trabaja en encargos de servicios profesionales en Argentina, Estados Unidos y Europa, y concursos nacionales e internacionales." />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    
      <title>{title}</title>
      
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
};

export default CustomHead;
