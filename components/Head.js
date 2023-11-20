import Head from 'next/head';

const CustomHead = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} • BAS` : 'BAS';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Estudio de arquitectura con base en la Ciudad de Buenos Aires que trabaja en encargos de servicios profesionales en Argentina, Estados Unidos y Europa, y concursos nacionales e internacionales." />
    
      <title>{title}</title>
      
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
};

export default CustomHead;
